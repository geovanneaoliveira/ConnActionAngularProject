import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventoService } from '../services/evento.service';
import { PatrocinadorService } from '../services/patrocinador.service';
import { Patrocinador } from '../types/types';

@Component({
  selector: 'app-set-patrocinadores-evento',
  templateUrl: './set-patrocinadores-evento.component.html',
  styleUrls: ['./set-patrocinadores-evento.component.css']
})
export class SetPatrocinadoresEventoComponent implements OnInit {

  patrocinadoresEventoForm;
  submitted = false;
  patrocinadores: Patrocinador[] = [];
  idEvento!:number;

  constructor(private eventoService: EventoService, private patrocinadorService: PatrocinadorService, private formBuilder: FormBuilder, private http: HttpClient, private activatedRoute: ActivatedRoute) {
    this.patrocinadoresEventoForm = this.formBuilder.group({
      idPatrocinadores: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.idEvento = params['id'];
    });
    this.patrocinadorService.getAll().subscribe(patrocinadores => {
      this.patrocinadores = patrocinadores;
    });
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.patrocinadoresEventoForm.get('idPatrocinadores') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  setPatrocinadoresEvento = () => {
    
  }

}
