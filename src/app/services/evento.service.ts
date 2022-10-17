import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evento } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }

  getAll = () => {
    return this.http.get<Evento[]>('evento');
  }
}

