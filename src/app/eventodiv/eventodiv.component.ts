import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../types/types';

@Component({
  selector: 'app-eventodiv',
  templateUrl: './eventodiv.component.html',
  styleUrls: ['./eventodiv.component.css']
})
export class EventodivComponent implements OnInit {

  eventos: Evento[] = [];

  constructor(private eventoService:EventoService)  { }

  ngOnInit(): void {
    this.eventoService.getAll().subscribe(eventos => {
      this.eventos = eventos;
    });
  }

}
