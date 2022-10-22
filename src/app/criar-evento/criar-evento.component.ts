import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../services/evento.service';
import { TagsService } from '../services/tags.service';
import { Tag } from '../types/types';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.css']
})
export class CriarEventoComponent implements OnInit {

  eventoForm;
  submitted = false;
  idOrg: any;
  nome = "CriarEVENTO";
  classesTextEvento = 'border-gradient border-gradient-purple';
  tags: Tag[] = [];

  constructor(private eventoService: EventoService, private tagsService: TagsService, private formBuilder: FormBuilder, private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.eventoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      data: ['', Validators.required],
      idOrganizacao: [''],
      idTags: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idOrg = params['id'];
    });
    this.tagsService.getAll().subscribe(tags => {
      this.tags = tags
    });
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.eventoForm.get('idTags') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
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

  criarEvento = () => {
    this.submitted = true;
    this.eventoForm.value.idOrganizacao = this.idOrg;
    this.http.post<any>('/evento/criar', this.eventoForm.value)
      .subscribe({
        next: (response) => {
          console.log(response);
          window.location.reload();
        },
        error: (error) => console.log(error),
      });
  }
}
