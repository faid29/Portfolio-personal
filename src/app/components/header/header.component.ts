import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild("mostrarModal") mostrarModal!: LoginComponent;
  constructor( ){
  
   }

  ngOnInit(): void {}
  
  toggleModal(){
    this.mostrarModal.toggleModal();
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
