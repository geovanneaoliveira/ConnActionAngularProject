import { Component, OnInit } from '@angular/core';
import { OrganizacaoService } from '../services/organizacao.service';
import { Organizacao } from '../types/types';

@Component({
  selector: 'app-org-supervisor',
  templateUrl: './org-supervisor.component.html',
  styleUrls: ['./org-supervisor.component.css']
})
export class OrgSupervisorComponent implements OnInit {

  org:any;

  constructor(private organizacaoService:OrganizacaoService) {
  }

  ngOnInit(): void {
    this.org = this.org.orgSupervisor;
  }

}
