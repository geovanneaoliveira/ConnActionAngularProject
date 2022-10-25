import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { AuthenticationService } from '../helpers/auth.service';
import { TagsService } from '../services/tags.service';
import { Tag } from '../types/types';

@Component({
  selector: 'app-set-tags',
  templateUrl: './set-tags.component.html',
  styleUrls: ['./set-tags.component.css']
})
export class SetTagsComponent implements OnInit {

  tags: Tag[] = [];
  tagsUser: Tag[] = [];
  idTags: undefined[] | unknown= [];
  tagsForm;

  constructor(private tagsService:TagsService, private formBuilder:FormBuilder, private auth:AuthenticationService) { 
    this.tagsForm = this.formBuilder.group({
      checkArray: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.tagsService.getAll().subscribe(tags => {
      this.tags = tags
    });
  }

  setUserTags = () => {
    this.idTags = this.tagsForm.value.checkArray;
    this.tagsService.setTagsPessoa(this.idTags,this.auth.userValue.id);
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.tagsForm.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
      (<HTMLInputElement>document.getElementById(e.target.value)).style.backgroundColor = 'rgb(204, 167, 252)';
    } else {
      (<HTMLInputElement>document.getElementById(e.target.value)).style.backgroundColor = 'rgb(206, 209, 247)';
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }



  }

}
