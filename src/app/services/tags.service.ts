import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tag } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) { }

  getAll = () => {
    return this.http.get<Tag[]>(`${environment.url}/tags`);
  }
}
