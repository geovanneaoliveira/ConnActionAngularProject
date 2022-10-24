import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../helpers/auth.service';
import { Evento } from '../types/types';
import { TagsService } from './tags.service';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  idPessoa:any;

  constructor(private http: HttpClient, private auth:AuthenticationService, private tagsService:TagsService) {
    this.idPessoa = auth.userValue.id;
  }

  getAll = () => {
    return this.http.get<Evento[]>('/evento');
  }

  eventosNaoPresente = () => {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("idPessoa", this.idPessoa);
    return this.http.get<Evento[]>('/evento/naopresente', {params:queryParams});
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
    this.idPessoa = this.auth.userValue.id;
    let queryParams = new HttpParams();
    queryParams = queryParams.append("idUsuario", this.idPessoa);
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

  confirmarPresenca = (idEvento:number) => {
    let idPessoa = this.idPessoa;
    return this.http.post<any>('/evento/presenca', {idPessoa, idEvento});
  }

  eventosTagsUser = () => {
    this.idPessoa = this.auth.userValue.id;
    let queryParams = new HttpParams();
    queryParams = queryParams.append("idUser", this.idPessoa);
    return this.http.get<Evento[]>('/evento/tagsuser', {params:queryParams});
  }
}

