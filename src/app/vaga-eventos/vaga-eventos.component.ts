import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../helpers/auth.service';
import { EventoService } from '../services/evento.service';
import { Evento } from '../types/types';
import { User } from '../types/types';

@Component({
  selector: 'app-vaga-eventos',
  templateUrl: './vaga-eventos.component.html',
  styleUrls: ['./vaga-eventos.component.css']
})
export class VagaEventosComponent implements OnInit {

  eventosTags: Evento[] = [];
  eventos: Evento[] = [];
  user!: number;

  constructor(private eventoService: EventoService, private router:Router, private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.user = this.auth.userValue.id;
    this.eventoService.eventosNaoPresente().subscribe(eventos => {
      this.eventos = eventos;
    });
    this.eventoService.eventosTagsUser().subscribe(eventos => {
      this.eventosTags = eventos;
    });
  }

  confirmarPresenca = (idEvento: number) => {
    this.eventoService.confirmarPresenca(idEvento).subscribe(response => {
      (<HTMLInputElement>document.getElementById(idEvento as unknown as string)).innerText = 'Confirmado!';
      (<HTMLInputElement>document.getElementById(idEvento as unknown as string)).disabled = true;
      console.log(response);
    });
  }

  verInfos(idEvento: number) {
    this.router.navigate([`eventoinfos/${idEvento}`]);
  }

}
