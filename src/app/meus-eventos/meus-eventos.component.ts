import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../types/types';

@Component({
  selector: 'app-meus-eventos',
  templateUrl: './meus-eventos.component.html',
  styleUrls: ['./meus-eventos.component.css']
})
export class MeusEventosComponent implements OnInit {

  eventos: Evento[] = [];

  constructor(private eventoService:EventoService)  { }

  ngOnInit(): void {
    this.eventoService.eventosUsuarioPresente().subscribe(eventos => {
      this.eventos = eventos;
    });
  }
}
