import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrganizacaoService } from '../services/organizacao.service';
import { Organizacao } from '../types/types';

@Component({
  selector: 'app-minhas-orgs',
  templateUrl: './minhas-orgs.component.html',
  styleUrls: ['./minhas-orgs.component.css']
})
export class MinhasOrgsComponent implements OnInit {

  organizacoes: Organizacao[] = [];

  constructor(private organizacaoService: OrganizacaoService) { }

  ngOnInit(): void {
    this.organizacaoService.orgsPorSupervisor().subscribe(organizacoes => {
      this.organizacoes = organizacoes;
    });
  }

}
