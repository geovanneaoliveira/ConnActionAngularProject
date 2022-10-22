import { HttpClient } from '@angular/common/http';
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
  submitted = false;

  nome="CriarEVENTO";
  classesTextEvento='border-gradient border-gradient-purple';
  

  constructor(private eventoService:EventoService, private formBuilder:FormBuilder, private http:HttpClient) { 
    this.eventoForm = this.formBuilder.group({
      nome:['', Validators.required],
      data:['', Validators.required],
      idOrganizacao:['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  criarEvento = () => {
    this.submitted = true;
    this.http.post<any>('/evento/criar', this.eventoForm.value)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => console.log(error),
      });
  }
  

}
