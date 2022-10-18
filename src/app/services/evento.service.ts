import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Evento } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  constructor(private http: HttpClient) { }

  getAll = () => {
    return this.http.get<Evento[]>(`${environment.url}/evento`);
  }
}

