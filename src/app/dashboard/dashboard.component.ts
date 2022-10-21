import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../helpers/auth.service';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private eventoService:EventoService, private auth:AuthenticationService) { }

  base64foto = this.auth.userValue.fotoPerfil;

  ngOnInit(): void {
    
  }
}
