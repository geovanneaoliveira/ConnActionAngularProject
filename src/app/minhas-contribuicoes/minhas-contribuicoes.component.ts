import { Component, OnInit } from '@angular/core';
import { ContribuicaoService } from '../services/contribuicao.service';
import { Contribuicao } from '../types/types';

@Component({
  selector: 'app-minhas-contribuicoes',
  templateUrl: './minhas-contribuicoes.component.html',
  styleUrls: ['./minhas-contribuicoes.component.css']
})
export class MinhasContribuicoesComponent implements OnInit {

  contribuicoes: Contribuicao[] = [];

  constructor(private contribuicaoService:ContribuicaoService) { }

  ngOnInit(): void {
    this.contribuicaoService.contribuicoesPorUsuario().subscribe(contribuicoes => {
      this.contribuicoes = contribuicoes;
    });
  }

}
