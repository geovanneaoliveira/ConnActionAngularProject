import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../helpers/auth.service';
import { Tag } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class TagsService implements OnInit{

  idPessoa: any;

  constructor(private http: HttpClient, private auth:AuthenticationService) { }

  ngOnInit(): void {
    this.idPessoa = this.auth.userValue.id;
  }

  getAll = () => {
    return this.http.get<Tag[]>('/tags');
  }

  setTagsPessoa = (idTagsPessoa:unknown, idPessoa:number) => {
    this.http.post<any>('/tags/tagsPessoa',{ idPessoa , idTagsPessoa}).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => console.log(error),
    });
  }
}
