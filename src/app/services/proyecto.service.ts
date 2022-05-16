import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = "https://frozen-fjord-36122.herokuapp.com/api/persona/proyecto/";
  
  constructor(private http: HttpClient) { }

  nuevaProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.post<Proyecto>(this.URL + "nueva", proyecto);
  }

  borrarProyecto(id: number): Observable<any> {
    return this.http.delete(this.URL + "borrar/" + id);
  }

  editarProyecto(proyecto: Proyecto): Observable<Proyecto> {
    return this.http.put<Proyecto>(this.URL + "editar", proyecto);
  }



}
