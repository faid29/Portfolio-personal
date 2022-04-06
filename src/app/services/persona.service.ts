import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';



@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL='http://localhost:8080/api/persona/1'

  constructor(private http: HttpClient) { 
  }
  

  getPersona():Observable<Persona>{
    return this.http.get<Persona>(this.URL)
  }

/*   postPerfil():Observable<any>{
    return this.http.post('/api/perfil/nueva');
  }

  savePerfil():Observable<Perfil>{
    return this.http.post('/api/perfil/guardar');
  }

  editarPerfil(id:string, perfil: Perfil):Observable<Perfil[]>{
    return this.http.put('/api/perfil/'+id, perfil);
  }

  eliminar(id:string):Observable<any>{
    return this.http.delete('/api/perfil/'+id)
  } */



}
