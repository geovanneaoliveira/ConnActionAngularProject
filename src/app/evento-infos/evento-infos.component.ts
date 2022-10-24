import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-evento-infos',
  templateUrl: './evento-infos.component.html',
  styleUrls: ['./evento-infos.component.css']
})
export class EventoInfosComponent implements OnInit {

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

}
