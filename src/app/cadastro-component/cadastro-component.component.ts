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

  nome='CADASTRAR';
  classesText='border-gradient border-gradient-purple';
  classesCadastro='btn-size submit';
  returnUrl: string = '/setTags';
  caminho: any | null;

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
    const cadastro: Cadastro = this.cadastroForm.value as Cadastro;
    this.submitted = true;
    if (this.cadastroForm.invalid) {
        return;
    }
    this.http.post<any>('/pessoa/cadastro', cadastro)
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
      (<HTMLInputElement>document.getElementById('profile')).style.backgroundImage = 'url('+reader.result+')'
      console.log(reader.result);
      this.cadastroForm.value.fotoPerfil = reader.result as string; 
    };
    this.foto = file;
  }

}
