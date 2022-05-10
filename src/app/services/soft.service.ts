import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soft } from '../model/soft.model';

@Injectable({
  providedIn: 'root'
})
export class SoftService {

  URL = "http://localhost:8080/api/persona/soft/";
  
  constructor(private http: HttpClient) { }

  nuevaSoft(soft: Soft): Observable<Soft> {
    return this.http.post<Soft>(this.URL + "nueva", soft);
  }

  borrarSoft(id: number): Observable<any> {
    return this.http.delete(this.URL + "borrar/" + id);
  }

  editarSoft(soft: Soft): Observable<Soft> {
    return this.http.put<Soft>(this.URL + "editar", soft);
  }

}
