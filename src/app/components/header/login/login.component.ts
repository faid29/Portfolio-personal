import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mostrarModal: boolean = false;
  isLogged: boolean = true;
  isAdmin: boolean = false; 
  closeSesion: boolean =  false;
  constructor(private tokenService : TokenService) {

  }

  ngOnInit() {
    this.isLogged = this.tokenService. isLogged()
    this.isAdmin = this.tokenService.isAdmin();
  }

  toggleModal() {
    this.mostrarModal = !this.mostrarModal
  }

  mostrarIniciarSesion: boolean = true;
  mostrarRegistro: boolean = false;
  tituloRegistro: string = "Registrarse";

  mostrarOcultar() {
    if (this.mostrarRegistro) {
      this.mostrarRegistro = false;
      this.mostrarIniciarSesion = true;
      this.tituloRegistro = "Registrarse";
    } else {
      this.mostrarRegistro = true
      this.mostrarIniciarSesion = false;
      this.tituloRegistro = "Iniciar Sesion";
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  


}
