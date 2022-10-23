import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContribuicaoService } from '../services/contribuicao.service';
import { OrganizacaoService } from '../services/organizacao.service';
import { ContribuicaoForm, Organizacao } from '../types/types';

@Component({
  selector: 'app-criar-contribuicao',
  templateUrl: './criar-contribuicao.component.html',
  styleUrls: ['./criar-contribuicao.component.css']
})
export class CriarContribuicaoComponent implements OnInit {

  contribuicaoForm;
  submitted=false;
  todasOrgs:Organizacao[] = [];
  idOrg!: number;
  contribuicao: any;

  constructor(private formBuilder:FormBuilder, private contribuicaoService:ContribuicaoService, private organizacaoService:OrganizacaoService) {
    this.contribuicaoForm = formBuilder.group({
      valor:['',Validators.required],
      data:[new Date()],
      idPessoa:[contribuicaoService.auth.userValue.id],
      idOrganizacao:[this.idOrg]
    });
  }

  ngOnInit(): void {
    this.organizacaoService.getAll().subscribe(organizacoes => {
      this.todasOrgs = organizacoes;
    });
  }

  get f() {
    return this.contribuicaoForm.controls;
  }

  setIdOrg = (idOrg:number) => {
    this.idOrg = idOrg;
  }

  criarContribuicao = () => {
    this.submitted=true;
    this.contribuicaoForm.value.idOrganizacao = this.idOrg;
    this.contribuicaoService.criarContribuicao(this.contribuicaoForm.value as ContribuicaoForm).subscribe({
      next: (response) => {
        console.log(response);
        window.location.reload();
      },
      error: (error) => console.log(error),
    });
  }

  conhecerOrg = () => {

  }
}