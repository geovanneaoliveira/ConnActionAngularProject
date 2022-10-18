import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contribuicao } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ContribuicaoService {

  constructor(private http: HttpClient) { }

  getAll = () => {
    return this.http.get<Contribuicao[]>(`${environment.url}/contribuicao`);
  }
}
