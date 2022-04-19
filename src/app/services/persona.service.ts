import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';



@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL='http://localhost:8080/api/persona/'
  

  constructor(private http: HttpClient) { 
  }
  

  getPersona():Observable<Persona>{
    return this.http.get<Persona>(this.URL + "1")
  }

  nuevaPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.URL + "nueva", persona);
  }

  borrarPersona(id: number): Observable<any> {
    return this.http.delete(this.URL + "borrar/" + id);
  }

  editarPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(this.URL + "editar", persona);
  }





}
