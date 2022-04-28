import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../model/jwtDto.model';
import { LoginUsuario } from '../model/loginUsuario';
import { NuevoUsuario } from '../model/nuevoUsuario';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', loginUsuario);
  }

}
