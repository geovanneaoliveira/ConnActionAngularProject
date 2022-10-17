import { Component, OnInit } from '@angular/core';
import { EventoService } from '../services/evento.service';
import { Evento } from '../types/types';

@Component({
  selector: 'app-eventodiv',
  templateUrl: './eventodiv.component.html',
  styleUrls: ['./eventodiv.component.css']
})
export class EventodivComponent implements OnInit {

  constructor(private eventoService:EventoService)  { }

  eventos: Evento[] = [];

  ngOnInit(): void {
  }


}
