import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EventoService } from '../services/evento.service';
import { OrganizacaoService } from '../services/organizacao.service';
import { Evento, Organizacao } from '../types/types';

@Component({
  selector: 'app-org-supervisor',
  templateUrl: './org-supervisor.component.html',
  styleUrls: ['./org-supervisor.component.css']
})
export class OrgSupervisorComponent implements OnInit {

  org!: Organizacao;
  backimg:any;
  eventos:Evento[] = [];
  backFoto:any;

  constructor(private organizacaoService:OrganizacaoService, private activatedRoute:ActivatedRoute, private eventoService:EventoService, private router:Router) {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      console.log(`${id}`);
      this.organizacaoService.orgPorId(id).subscribe(org => {
        this.org = org;
      });
    });
  }

  ngOnInit(): void {
  }

  gerenciarEvento = (evento:Evento) => {
    console.log(evento.id);
    this.router.navigate([`eventoorgsupervisor/${evento.id}`]);
  }

}
