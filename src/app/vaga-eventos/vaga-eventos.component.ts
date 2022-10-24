import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../types/types';

@Component({
  selector: 'app-vaga-eventos',
  templateUrl: './vaga-eventos.component.html',
  styleUrls: ['./vaga-eventos.component.css']
})
export class VagaEventosComponent implements OnInit {

  eventos:Evento[] = [];

  constructor(private eventoService:EventoService) { }

  ngOnInit(): void {
    this.eventoService.getAll().subscribe(eventos => {
      this.eventos = eventos;
    });
  }

}
