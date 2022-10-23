import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from '../services/evento.service';
import { Patrocinador } from '../types/types';

@Component({
  selector: 'app-evento-supervisor',
  templateUrl: './evento-supervisor.component.html',
  styleUrls: ['./evento-supervisor.component.css']
})
export class EventoSupervisorComponent implements OnInit {

  evento:any;

  constructor( private activatedRoute:ActivatedRoute, private eventoService:EventoService, private router:Router) {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      console.log(`${id}`);
      this.eventoService.eventoPorId(id).subscribe(evento => {
        this.evento = evento;
      });
    });
  }

  ngOnInit(): void {
  }

  gerenciarPatrocinador = (patrocinador:Patrocinador) => {

  }

}
