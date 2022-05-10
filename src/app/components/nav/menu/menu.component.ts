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
  showSubMenu:boolean = false;

  menus=[
    {
    'titulo':'QUIEN SOY',
    'url':'',
    'icon':'bi bi-question-circle'
    },
    {
    'titulo':'CONTACTO',
    'url':'contacto',
    'icon':'bi bi-telephone-outbound'
    }
 ]

 subMenus=[
  {
  'subtitulo':'PROFESION',
  'url':'#page-1'
  }, 
  {
  'subtitulo':'LABORAL',
  'url':'#page-2'
  },
  {
  'subtitulo':'EDUCACIÓN',
  'url':'#page-3'
  }
  ,
  {
  'subtitulo':'IDIOMA',
  'url':'#page-4'
  }
  ,
  {
  'subtitulo':'HARD SKILL',
  'url':'#page-5'
  }
  ,
  {
  'subtitulo':'SOFT SKILL',
  'url':'#page-6'
  },
  {
  'subtitulo':'PROYECTOS',
  'url':'#page-7'
  }
]

}
