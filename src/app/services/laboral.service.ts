import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Laboral } from '../model/laboral.model';

@Injectable({
  providedIn: 'root'
})
export class LaboralService {

  URL = "https://frozen-fjord-36122.herokuapp.com/api/persona/laboral/";
  constructor(private http: HttpClient) { }

  nuevaLaboral(laboral: Laboral): Observable<Laboral> {
    return this.http.post<Laboral>(this.URL + "nueva", laboral);
  }

  borrarLaboral(id: number): Observable<any> {
    return this.http.delete(this.URL + "borrar/" + id);
  }

  editarLaboral(laboral: Laboral): Observable<Laboral> {
    return this.http.put<Laboral>(this.URL + "editar", laboral);
  }

  getLaboral():Observable<Laboral>{
    return this.http.get<Laboral>(this.URL+"1")
  }


}
