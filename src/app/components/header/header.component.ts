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

  

  dataLogo=[
    {
    'titulo1':'Argentina',
    'titulo2':'Programa',
    'titulo3':'#Yo Programo',
    'icon1':'bi bi-chevron-right',
    'icon2':'_'
    }
 ]

  showMenu:boolean = false;

  dataMenu=[
    {
    'titulo':'PORTAFOLIO',
    'url':'',
    'icon':'bi bi-briefcase'
    }, 
    {
    'titulo':'QUIEN SOY',
    'url':'',
    'icon':'bi bi-question-circle'
    },
    {
    'titulo':'CONTACTO',
    'url':'',
    'icon':'bi bi-telephone-outbound'
    }
 ]












}
