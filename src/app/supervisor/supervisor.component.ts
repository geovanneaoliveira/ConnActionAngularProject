import { Component, OnInit } from '@angular/core';
import { OrganizacaoService } from '../services/organizacao.service';
import { Organizacao } from '../types/types';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {

  minhasOrgs: Organizacao[] = [];

  constructor(private organizacaoService:OrganizacaoService) { }

  ngOnInit(): void {
    this.organizacaoService.orgsPorSupervisor().subscribe(organizacoes => {
      this.minhasOrgs = organizacoes;
    });
  }
  

}
