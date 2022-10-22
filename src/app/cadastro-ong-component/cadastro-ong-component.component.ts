import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-ong-component',
  templateUrl: './cadastro-ong-component.component.html',
  styleUrls: ['./cadastro-ong-component.component.css']
})
export class CadastroOngComponentComponent {

  cadastroOngForm

  nome='CADASTRAR';
  classesText='border-gradient border-gradient-purple';
  classesCadastro='btn-size submit';

  constructor(private formBuilder:FormBuilder){
    this.cadastroOngForm = this.formBuilder.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      caminhoImagem: [''],
      supervisor: ['', Validators.required],
      cnpj: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.cadastroOngForm.value);
  }

  // onClick = () => {
  //   (<HTMLInputElement>document.getElementById('mediaFile')).click();
  //   (<HTMLInputElement>document.getElementById('mediaFile')).onchange = () => {
  //     let caminho = (<HTMLInputElement>document.getElementById('mediaFile')).value;
  //     (<HTMLInputElement>document.getElementById('profile')).style.backgroundImage = 'url(../../assets/pfpictures/deb.jpg)';
  //     console.log((<HTMLInputElement>document.getElementById('profile')).style.backgroundImage);
  //     console.log((<HTMLInputElement>document.getElementById('mediaFile')).value);
  //   };
  // }

}
