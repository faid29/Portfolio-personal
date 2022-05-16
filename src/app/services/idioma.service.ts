import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idioma } from '../model/idioma.model';

@Injectable({
  providedIn: 'root'
})
export class IdiomaService {

  URL = "https://frozen-fjord-36122.herokuapp.com/api/persona/idioma/";
  constructor(private http: HttpClient) { }

  nuevaIdioma(idioma: Idioma): Observable<Idioma> {
    return this.http.post<Idioma>(this.URL + "nueva", idioma);
  }

  borrarIdioma(id: number): Observable<any> {
    return this.http.delete(this.URL + "borrar/" + id);
  }

  editarIdioma(idioma: Idioma): Observable<Idioma> {
    return this.http.put<Idioma>(this.URL + "editar", idioma);
  }

  getIdioma():Observable<Idioma>{
    return this.http.get<Idioma>(this.URL+"1")
  }



}
