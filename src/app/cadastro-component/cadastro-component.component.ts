import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-component',
  templateUrl: './cadastro-component.component.html',
  styleUrls: ['./cadastro-component.component.css']
})
export class CadastroComponentComponent {

  cadastroForm;

  nome='CADASTRAR';
  classesText='border-gradient border-gradient-purple';
  classesCadastro='btn-size submit';

  constructor(private formBuilder:FormBuilder){
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

  onSubmit() {
    console.log(this.cadastroForm.value);
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
