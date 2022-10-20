import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthenticationService } from '../helpers/auth.service';
import { Organizacao } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class OrganizacaoService implements OnInit{
  
  userId;

  constructor(private http:HttpClient, private auth:AuthenticationService) {
    this.userId = this.auth.userValue.id;
  }
  
  ngOnInit(): void {
    
  }

  getAll = () => {
    return this.http.get<Organizacao[]>('/org');
  }
  
  criarOrg = () => {
    return this.http.post<any>('/org/criar', {});
  }

  orgsPorSupervisor = () => {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("idSupervisor", this.userId);
    return this.http.get<Organizacao[]>('/org/porSupervisor', {params:queryParams});
  }
}
