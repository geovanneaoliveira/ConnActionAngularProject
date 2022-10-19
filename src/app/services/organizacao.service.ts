import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Organizacao } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class OrganizacaoService {

  constructor(private http:HttpClient) { }

  getAll = () => {
    return this.http.get<Organizacao[]>('/org');
  }

  
  criarOrg = () => {
    return this.http.post<any>('/org/criar', {});
  }
}
