import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from '../services/evento.service';
import { OrganizacaoService } from '../services/organizacao.service';
import { Evento, Organizacao } from '../types/types';

@Component({
  selector: 'app-org-infos',
  templateUrl: './org-infos.component.html',
  styleUrls: ['./org-infos.component.css']
})
export class OrgInfosComponent implements OnInit {

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

  verInfos(idEvento: number) {
    this.router.navigate([`eventoinfos/${idEvento}`]);
  }

  confirmarPresenca = (idEvento: number) => {
    this.eventoService.confirmarPresenca(idEvento).subscribe(response => {
      (<HTMLInputElement>document.getElementById(idEvento as unknown as string)).innerText = 'Confirmado!';
      (<HTMLInputElement>document.getElementById(idEvento as unknown as string)).disabled = true;
      console.log(response);
    });
  }
}
