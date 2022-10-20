import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../helpers/auth.service';
import { Contribuicao } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ContribuicaoService {

  constructor(private http: HttpClient, public auth:AuthenticationService) {
  }


  getAll = () => {
    return this.http.get<Contribuicao[]>(`/contribuicao`);
  }
  
}
