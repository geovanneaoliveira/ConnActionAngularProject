import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Type } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../helpers/auth.service';
import { OrganizacaoService } from '../services/organizacao.service';

@Component({
  selector: 'app-criar-org',
  templateUrl: './criar-org.component.html',
  styleUrls: ['./criar-org.component.css']
})
export class CriarOrgComponent implements OnInit {

  submitted=false;
  orgForm;

  constructor(private formBuiler:FormBuilder, private organizacaoService:OrganizacaoService, private auth:AuthenticationService, private http:HttpClient) {
    this.orgForm = formBuiler.group({
      nome:['', Validators.required],
      descricao:[''],
      idSupervisor:[this.auth.userValue.id],
      cnpj:[''],
      caminhoImagem:['']
    });
  }

  get f() {
    return this.orgForm.controls;
  } 

  ngOnInit(): void {
  }

  criarOrg = () => {
    this.submitted = true;
    this.http.post<any>('/org/criar', this.orgForm.value)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => console.log(error),
      });
  }

}
