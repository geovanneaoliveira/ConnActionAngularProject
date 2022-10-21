import { HttpClient, HttpParams } from '@angular/common/http';
import { NonNullAssert } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cadastro } from '../types/types';

@Component({
  selector: 'app-cadastro-component',
  templateUrl: './cadastro-component.component.html',
  styleUrls: ['./cadastro-component.component.css']
})
export class CadastroComponentComponent {

  cadastroForm;
  submitted = false;
  succes = false;
  foto: any;
  cadastro!: Cadastro;

  nome='CADASTRAR';
  classesText='border-gradient border-gradient-purple';
  classesCadastro='btn-size submit';
  returnUrl: string = '/setTags';
  base64:any;

  constructor(private formBuilder:FormBuilder, private http: HttpClient, private router:Router){
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
      cpf: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', Validators.required],
      fotoPerfil: ['']
    });
  }

  get f() {
    return this.cadastroForm.controls;
  } 

  cadastrar() {
    this.cadastro = this.cadastroForm.value as Cadastro;
    this.cadastro.fotoPerfil = this.base64;
    this.submitted = true;
    if (this.cadastroForm.invalid) {
        return;
    }
    this.http.post<any>('/pessoa/cadastro', this.cadastro)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigateByUrl('/login');
        },
        error: (error) => console.log(error),
      });

  }

  onClick = () => {
    (<HTMLInputElement>document.getElementById('mediaFile')).click();
  };

  fotoPerfil = (event:any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      (<HTMLInputElement>document.getElementById('profile')).style.backgroundImage = 'url('+this.base64+')';
    };
  }

}
