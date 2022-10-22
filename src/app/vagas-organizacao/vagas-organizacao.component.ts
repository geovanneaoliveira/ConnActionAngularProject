import { Component, OnInit } from '@angular/core';
import { OrganizacaoService } from '../services/organizacao.service';
import { Organizacao } from '../types/types';

@Component({
  selector: 'app-vagas-organizacao',
  templateUrl: './vagas-organizacao.component.html',
  styleUrls: ['./vagas-organizacao.component.css']
})
export class VagasOrganizacaoComponent implements OnInit {

  minhasOrgs:Organizacao[] = [];

  constructor(private organizacaoService:OrganizacaoService) { }

  ngOnInit(): void {
    this.organizacaoService.getAll().subscribe(organizacoes => {
      this.minhasOrgs = organizacoes;
    });
  }

  visitarOrg = (org:Organizacao) => {

  } 

}
