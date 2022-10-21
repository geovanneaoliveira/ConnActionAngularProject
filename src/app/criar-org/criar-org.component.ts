import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../helpers/auth.service';
import { OrganizacaoService } from '../services/organizacao.service';
import { Organizacao } from '../types/types';

@Component({
  selector: 'app-criar-org',
  templateUrl: './criar-org.component.html',
  styleUrls: ['./criar-org.component.css']
})
export class CriarOrgComponent implements OnInit {

  submitted=false;
  orgForm;
  organizacao!: Organizacao;
  base64:any;

  constructor(private formBuiler:FormBuilder, private organizacaoService:OrganizacaoService, private auth:AuthenticationService, private http:HttpClient) {
    this.orgForm = formBuiler.group({
      nome:['', Validators.required],
      descricao:[''],
      idSupervisor:[this.auth.userValue.id],
      cnpj:[''],
      orgFoto:['']
    });
  }

  get f() {
    return this.orgForm.controls;
  } 

  ngOnInit(): void {
  }

  criarOrg = () => {
    this.submitted = true;
    this.organizacao = this.orgForm.value as Organizacao;
    this.organizacao.orgFoto = this.base64;
    this.http.post<any>('/org/criar', this.organizacao)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => console.log(error),
      });
  }

  fotoOrg = (event:any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      // (<HTMLInputElement>document.getElementById('profile')).style.backgroundImage = 'url('+this.base64+')';
    };
  }

}
