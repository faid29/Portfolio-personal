import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../model/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  URL='https://frozen-fjord-36122.herokuapp.com/api/contacto/'
  

  constructor(private http: HttpClient) { 
  }
  

  getContacto():Observable<Contacto>{
    return this.http.get<Contacto>(`${this.URL}2`)
  }
  
  getAllContacto():Observable<Contacto>{
    return this.http.get<Contacto>(this.URL + "list")
  }

  nuevaContacto(contacto: Contacto): Observable<Contacto> {
    return this.http.post<Contacto>(this.URL + "nueva", contacto);
  }

  borrarContacto(id: number): Observable<any> {
    return this.http.delete(this.URL + "borrar/" + id);
  }

  editarContacto(contacto: Contacto): Observable<Contacto> {
    return this.http.put<Contacto>(this.URL + "editar", contacto);
  }

}
