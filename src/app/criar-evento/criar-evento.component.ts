import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-criar-evento',
  templateUrl: './criar-evento.component.html',
  styleUrls: ['./criar-evento.component.css']
})
export class CriarEventoComponent implements OnInit {

  eventoForm;

  constructor(private eventoService:EventoService, private formBuilder:FormBuilder) { 
    this.eventoForm = this.formBuilder.group({
      nome:['', Validators.required],
      data:['', Validators.required],
      idOrganizacao:['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
