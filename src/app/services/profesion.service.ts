import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profesion } from '../model/profesion.model';

@Injectable({
  providedIn: 'root'
})
export class ProfesionService {

  URL = "http://localhost:8080/api/persona/profesion/";
  constructor(private http: HttpClient) { }

  nuevaProfesion(profesion: Profesion): Observable<Profesion> {
    return this.http.post<Profesion>(this.URL + "nueva", profesion);
  }

  borrarProfesion(id: number): Observable<any> {
    return this.http.delete(this.URL + "borrar/" + id);
  }

  editarProfesion(profesion: Profesion): Observable<Profesion> {
    return this.http.put<Profesion>(this.URL + "editar", profesion);
  }

  getProfesion():Observable<Profesion>{
    return this.http.get<Profesion>(this.URL+"1")
  }

}
