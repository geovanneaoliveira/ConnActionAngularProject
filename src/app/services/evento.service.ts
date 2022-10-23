import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../helpers/auth.service';
import { Evento } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  userId:any;

  constructor(private http: HttpClient, private auth:AuthenticationService) { }

  getAll = () => {
    return this.http.get<Evento[]>('/evento');
  }

  criarEvento = () => {
    this.http.post<any>('/evento/criar',{}).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error),
    });
  }

  eventosUsuarioPresente = () => {
    this.userId = this.auth.userValue.id;
    let queryParams = new HttpParams();
    queryParams = queryParams.append("idUsuario", this.userId);
    return this.http.get<Evento[]>('/evento/porusuario', {params:queryParams});
  }

  eventosIdOrg = (idOrg:number) => {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("idOrg", idOrg);
    return this.http.get<Evento[]>('/evento/poridorg', {params:queryParams});
  }

  eventoPorId(idEvento: number) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("idEvento", idEvento);
    return this.http.get<Evento>('/evento/porid', {params:queryParams});
  }
}

