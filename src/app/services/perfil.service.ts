import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { 
    console.log("servicio HTTP")
  }

  getPerfil():Observable<Perfil[]>{
    return this.http.get<Perfil[]>('/api/perfil')
  }


}
