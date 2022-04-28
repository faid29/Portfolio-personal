import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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
