import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cadastro } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  cadastrar = (cadastro: Partial<{ nome: string | null; sobrenome: string | null; telefone: string | null; cpf: string | null; login: string | null; senha: string | null; caminhoImagem: string | null; }>) => {
    const cad = {
      "nome" : cadastro.nome,
      "sobrenome" : cadastro.sobrenome,
      "telefone" : cadastro.telefone,
      "cpf" : cadastro.cpf,
      "login" : cadastro.login,
      "senha" : cadastro.senha,
      "caminhoImagem" : cadastro.caminhoImagem
    };

    this.http.post<any>('/pessoa/cadastro', cadastro)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });
  }
}
