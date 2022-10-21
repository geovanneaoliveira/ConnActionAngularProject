import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthenticationService } from '../helpers/auth.service';
import { Organizacao } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class OrganizacaoService implements OnInit{
  
  userId:any;
  nomeOrg: any;

  constructor(private http:HttpClient, private auth:AuthenticationService) {}
  
  ngOnInit(): void {
    
  }

  getAll = () => {
    return this.http.get<Organizacao[]>('/org');
  }
  
  criarOrg = () => {
    return this.http.post<any>('/org/criar', {});
  }

  orgsPorSupervisor = () => {
    this.userId = this.auth.userValue.id;
    let queryParams = new HttpParams();
    queryParams = queryParams.append("idSupervisor", this.userId);
    return this.http.get<Organizacao[]>('/org/porSupervisor', {params:queryParams});
  }
}
