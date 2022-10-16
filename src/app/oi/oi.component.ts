import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContribuicaoService } from '../services/contribuicao.service';
import { EventoService } from '../services/evento.service';
import { OrganizacaoService } from '../services/organizacao.service';
import { TagsService } from '../services/tags.service';
import { Contribuicao, Evento, Organizacao, Tag } from '../types/types';

@Component({
  selector: 'app-oi',
  templateUrl: './oi.component.html',
  styleUrls: ['./oi.component.css']
})
export class OiComponent implements OnInit {

  loading = false;
  tags: Tag[] = [];
  eventos: Evento[] = [];
  contribuicoes: Contribuicao[] = [];
  organizacoes: Organizacao[] = [];

  constructor(private http: HttpClient, 
    private tagService:TagsService, 
    private eventoService:EventoService,
    private contribuicaoService:ContribuicaoService,
    private organizacaoService:OrganizacaoService
    ) { }

  ngOnInit(): void {
  this.tagService.getAll().subscribe(tags => {
      this.tags = tags;
  });

  this.eventoService.getAll().subscribe(eventos => {
    this.eventos = eventos;
  });

  this.contribuicaoService.getAll().subscribe(contribuicoes => {
    this.contribuicoes = contribuicoes;
  })

  this.organizacaoService.getAll().subscribe(organizacoes => {
    this.organizacoes = organizacoes;
  })
  }

}
