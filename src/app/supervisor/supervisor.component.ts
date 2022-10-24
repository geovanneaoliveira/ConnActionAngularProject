import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrgSupervisorComponent } from '../org-supervisor/org-supervisor.component';
import { OrganizacaoService } from '../services/organizacao.service';
import { PatrocinadorService } from '../services/patrocinador.service';
import { Organizacao, Patrocinador } from '../types/types';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {

  minhasOrgs: Organizacao[] = [];
  patrocinadores: Patrocinador[] = [];

  constructor(private organizacaoService:OrganizacaoService, private router:Router, private patrocinadorService:PatrocinadorService) { }

  ngOnInit(): void {
    this.organizacaoService.orgsPorSupervisor().subscribe(organizacoes => {
      this.minhasOrgs = organizacoes;
    });
    this.patrocinadorService.getAll().subscribe(patrocinadores => {
      this.patrocinadores = patrocinadores;
    })
  }
  
  gerenciarOrg = (org:Organizacao) => {
    this.router.navigate([`orgsupervisor/${org.id}`]);
  }

  adicionarOrg = () => {
  }

  gerenciarPatrocinador = (patrocinador:Patrocinador) => {

  }
}
