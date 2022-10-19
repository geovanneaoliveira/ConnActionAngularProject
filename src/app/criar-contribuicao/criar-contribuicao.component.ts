import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ContribuicaoService } from '../services/contribuicao.service';
import { OrganizacaoService } from '../services/organizacao.service';

@Component({
  selector: 'app-criar-contribuicao',
  templateUrl: './criar-contribuicao.component.html',
  styleUrls: ['./criar-contribuicao.component.css']
})
export class CriarContribuicaoComponent implements OnInit {

  contribuicaoForm;
  submitted=false;

  constructor(private formBuilder:FormBuilder, private contribuicaoService:ContribuicaoService, private organizacaoService:OrganizacaoService) {
    this.contribuicaoForm = formBuilder.group({
      valor:['', Validators.required],
      data:[new Date()],
      idPessoa:[contribuicaoService.auth.userValue.id],
      idOrganizacao:[organizacaoService]
    })
  }

  ngOnInit(): void {
  }

  get f() {
    return this.contribuicaoForm.controls;
  }

  criarContribuicao = () => {
    
  }

}
