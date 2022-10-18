import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contribuicao } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ContribuicaoService {

  constructor(private http: HttpClient) { }

  getAll = () => {
    return this.http.get<Contribuicao[]>(`/contribuicao`);
  }
}
