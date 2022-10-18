import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  tagsForm;

  constructor(private tagsService:TagsService, private formBuilder:FormBuilder) { 
    this.tagsForm = this.formBuilder.group({
      tag:[''],
    });
  }

  ngOnInit(): void {
    this.tagsService.getAll().subscribe(tags => {
      this.tags = tags
    });
  }

  setUserTags = () => {
    
  }

}
