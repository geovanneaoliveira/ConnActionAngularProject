import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-component',
  templateUrl: './cadastro-component.component.html',
  styleUrls: ['./cadastro-component.component.css']
})
export class CadastroComponentComponent {

  cadastroForm;
  submitted = false;
  succes = false;

  nome='CADASTRAR';
  classesText='border-gradient border-gradient-purple';
  classesCadastro='btn-size button';
  returnUrl: string = '/setTags';

  constructor(private formBuilder:FormBuilder, private http: HttpClient, private router:Router){
    this.cadastroForm = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
      cpf: ['', Validators.required],
      login: ['', Validators.required],
      senha: ['', Validators.required],
      caminhoImagem:[''],
    });
  }

  get f() {
    return this.cadastroForm.controls;
  } 

  cadastrar() {
    this.submitted = true;
    if (this.cadastroForm.invalid) {
        return;
    }
    this.http.post<any>('/pessoa/cadastro', this.cadastroForm.value)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => console.log(error),
      });
      this.router.navigateByUrl('/login');
  }

  onClick = () => {
    (<HTMLInputElement>document.getElementById('mediaFile')).click();
    (<HTMLInputElement>document.getElementById('mediaFile')).onchange = () => {
      let caminho = (<HTMLInputElement>document.getElementById('mediaFile')).value;
      (<HTMLInputElement>document.getElementById('profile')).style.backgroundImage = 'url(../../assets/pfpictures/deb.jpg)';
      console.log((<HTMLInputElement>document.getElementById('profile')).style.backgroundImage);
      console.log((<HTMLInputElement>document.getElementById('mediaFile')).value);
    };
  }

}
