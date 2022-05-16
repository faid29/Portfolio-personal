import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from 'src/app/services/token.service';
import { LoginUsuario } from 'src/app/model/loginUsuario';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  errMsj: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private toastr: ToastrService) { }

  ngOnInit() {
}

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe({
      next: data => {
  
        this.tokenService.setToken(data.token);
        this.toastr.success('Bienvenido ' + this.nombreUsuario, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.reloadPage()
      },
      error: err => {
        this.errMsj = err.error.message;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  logOut() {
    window.sessionStorage.clear();
    this.reloadPage()
  }

}
