import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patrocinador } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class PatrocinadorService {

  constructor(private http:HttpClient) { }

  criarPatrocinador(patrocinador:Patrocinador) {
    return this.http.post<any>('/patrocinador/criar', patrocinador);
  }
}
