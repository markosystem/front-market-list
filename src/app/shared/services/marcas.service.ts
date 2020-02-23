import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from 'src/app/shared/models/marca.model';
import { AbstractService } from './abstract.service';


@Injectable({
  providedIn: 'root'
})

export class MarcasService extends AbstractService {

  url = this.url_base + "marcas";

  constructor(private http: HttpClient) {
    super();
  }

  add(marca): Observable<Marca> {
    let options = {
      headers: this.httpHeaders
    };
    return this.http.post<Marca>(this.url, marca, options);
  }

  update(marca): Observable<HttpResponse<Marca>> {
    return this.http.post<Marca>(this.url, marca,
      {
        headers: this.httpHeaders,
        observe: 'response'
      }
    );
  }

  getAllMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.url);
  }
}
