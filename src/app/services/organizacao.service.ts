import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Organizacao } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class OrganizacaoService {

  constructor(private http:HttpClient) { }

  getAll = () => {
    return this.http.get<Organizacao[]>('org');
  }
}
