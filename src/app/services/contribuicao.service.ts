import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../helpers/auth.service';
import { Contribuicao } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ContribuicaoService {

  constructor(private http: HttpClient, public auth:AuthenticationService) { }

  userId:any;

  getAll = () => {
    return this.http.get<Contribuicao[]>(`/contribuicao`);
  }

  contribuicoesPorUsuario = () => {
    this.userId = this.auth.userValue.id;
    let queryParams = new HttpParams();
    queryParams = queryParams.append("idUsuario", this.userId);
    return this.http.get<Contribuicao[]>('/contribuicao/porusuario', {params:queryParams});
  }
  
}
