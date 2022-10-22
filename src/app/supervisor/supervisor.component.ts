import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrgSupervisorComponent } from '../org-supervisor/org-supervisor.component';
import { OrganizacaoService } from '../services/organizacao.service';
import { Organizacao } from '../types/types';

@Component({
  selector: 'app-supervisor',
  templateUrl: './supervisor.component.html',
  styleUrls: ['./supervisor.component.css']
})
export class SupervisorComponent implements OnInit {

  minhasOrgs: Organizacao[] = [];

  constructor(private organizacaoService:OrganizacaoService, private router:Router) { }

  ngOnInit(): void {
    this.organizacaoService.orgsPorSupervisor().subscribe(organizacoes => {
      this.minhasOrgs = organizacoes;
    });
  }
  
  gerenciarOrg = (org:Organizacao) => {
    this.router.navigate([`orgsupervisor/${org.id}`]);
  }

}
