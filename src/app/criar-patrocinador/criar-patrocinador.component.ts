import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../helpers/auth.service';
import { PatrocinadorService } from '../services/patrocinador.service';
import { Patrocinador } from '../types/types';

@Component({
  selector: 'app-criar-patrocinador',
  templateUrl: './criar-patrocinador.component.html',
  styleUrls: ['./criar-patrocinador.component.css']
})
export class CriarPatrocinadorComponent implements OnInit {

  submitted=false;
  patrocinadorForm;
  patrocinador!: Patrocinador;
  base64: any;
  idEvento!: number;

  constructor(private formBuiler:FormBuilder, private http:HttpClient, private auth: AuthenticationService, private activatedRoute:ActivatedRoute, private patrocinadorService:PatrocinadorService) {
    this.patrocinadorForm = formBuiler.group({
      nome:['', Validators.required],
      idRepresentante:[this.auth.userValue.id],
      fotoPatrocinador:['']
    });
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.idEvento = id;
    });
  }

  get f() {
    return this.patrocinadorForm.controls;
  } 

  ngOnInit(): void {
  }

  criarPatrocinador = () => {
    this.submitted = true;
    this.patrocinador = this.patrocinadorForm.value as Patrocinador;
    this.patrocinador.fotoPatrocinador = this.base64;
    this.patrocinadorService.criarPatrocinador(this.patrocinador).subscribe({
      next: (response) => {
        console.log(response);
        window.location.reload();
      },
      error: (error) => console.log(error),
    });
  }

  fotoPatrocinador = (event:any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
    };
  }

  setPatrocinadores = () => {
    
  }
}
