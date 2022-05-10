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
