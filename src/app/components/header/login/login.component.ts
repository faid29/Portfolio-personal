import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mostrarModal: boolean = false;
  isLogged: boolean = false

  constructor(private tokenService: TokenService) {

  }

  ngOnInit() {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  toggleModal() {
    this.mostrarModal = !this.mostrarModal
  }

  mostrarRegistro: boolean = false;
  mostrarIniciarSesion: boolean = true;
  tituloRegistro: string = "Registrarse";

  mostrarOcultar() {
    if (this.mostrarRegistro) {
      this.mostrarRegistro = false;
      this.mostrarIniciarSesion = true;
      this.tituloRegistro = "Registrarse";
    } else {
      this.mostrarRegistro = true
      this.mostrarIniciarSesion = false;
      this.tituloRegistro = "Iniciar Sesión";
    }
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();

  }



}
