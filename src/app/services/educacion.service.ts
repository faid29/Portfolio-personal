import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  
  URL = "https://frozen-fjord-36122.herokuapp.com/api/persona/educacion/";

  constructor(private http: HttpClient) { }

  nuevaEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.post<Educacion>(this.URL + "nueva", educacion);
  }

  borrarEducacion(id: number): Observable<any> {
    return this.http.delete(this.URL + "borrar/" + id);
  }

  editarEducacion(educacion: Educacion): Observable<Educacion> {
    return this.http.put<Educacion>(this.URL + "editar", educacion);
  }

  getEducacion():Observable<Educacion>{
    return this.http.get<Educacion>(this.URL+"1")
  }



}
