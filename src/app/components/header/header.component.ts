import { Component, OnInit, ViewChild } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';
import { LoginComponent } from './login/login.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("mostrarModal") mostrarModal!: LoginComponent;

  isLogged: boolean = true;
  closeSesion: boolean =  false;

  constructor(private tokenService : TokenService ){
  
   }

  ngOnInit(): void {
    this.isLogged = this.tokenService. isLogged()
  }
  
  toggleModal(){
    this.mostrarModal.toggleModal();
  }

  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

  logos=[
    {
    'titulo1':'Argentina',
    'titulo2':'Programa',
    'titulo3':'#Yo Programo',
    'icon1':'bi bi-chevron-right',
    'icon2':'_'
    }
 ]















}
