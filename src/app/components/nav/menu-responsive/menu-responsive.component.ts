import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-responsive',
  templateUrl: './menu-responsive.component.html',
  styleUrls: ['./menu-responsive.component.css']
})
export class MenuResponsiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMenu:boolean = false;
  showSubMenu:boolean = false;



  subMenus=[
    {
    'subtitulo':'PROFESION',
    'url':'/main#page-1'
    }, 
    {
    'subtitulo':'LABORAL',
    'url':'/main#page-2'
    },
    {
    'subtitulo':'EDUCACIÓN',
    'url':'/main#page-3'
    }
    ,
    {
    'subtitulo':'IDIOMA',
    'url':'/main#page-4'
    }
    ,
    {
    'subtitulo':'HARD SKILL',
    'url':'/main#page-5'
    }
    ,
    {
    'subtitulo':'SOFT SKILL',
    'url':'/main#page-6'
    },
    {
    'subtitulo':'PROYECTOS',
    'url':'/main#page-7'
    }
  ]

}
