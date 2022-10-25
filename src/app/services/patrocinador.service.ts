import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patrocinador } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class PatrocinadorService {

  constructor(private http: HttpClient) { }

  criarPatrocinador(patrocinador: Patrocinador) {
    return this.http.post<any>('/patrocinador/criar', patrocinador);
  }

  getAll = () => {
    return this.http.get<Patrocinador[]>('/patrocinador/todos');
  }

  setPatrocinadoresEvento = (idsPatrocinadores:any ,idEvento:number) => {
    return this.http.post<any>('/patrocinador/addpatrocinadorids',{idEvento,idsPatrocinadores})
  }
}
