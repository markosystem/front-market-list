import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Marca } from '../models/marca.model';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class MarcasService extends AbstractService {
  readonly url_complete = this.url.concat('marcas');

  constructor(private http: HttpClient) {
    super();
  }

  all() {
    return this.http.get(this.url_complete);
  }

  get(id: string) {
    return this.http.get(`${this.url_complete}/${id}`);
  }

  save(marca: Marca) {
    return this.http.post(this.url_complete, marca, this.httpOptions);
  }

  update(marca: Marca) {
    return this.http.put(`${this.url_complete}/${marca.id}`, marca, this.httpOptions);
  }

  delete(marca: Marca) {
    return this.http.delete(`${this.url_complete}/${marca.id}`, this.httpOptions);
  }

}
