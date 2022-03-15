import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showShare:boolean = false;

  contador:number = 0;
  
  estadoHeart:boolean = true;

  dataTitle=[
    {
      'titulo1':'Hola, soy',
      'titulo2':'Rubén Sarco',
      'parrafo':'Full Stack Developer Jr'
    }
  ]

  dataShare=[
    {
      'tiulo':'Facebook',
      'url':'https://img.icons8.com/fluency/48/000000/facebook-new.png',
    },
    {
      'titulo':'Linkedln',
      'url':'https://img.icons8.com/fluency/48/000000/linkedin.png'
    },
    {
      'tiulo':'Git',
      'url':'https://img.icons8.com/fluency/48/000000/github.png',
    },
    { 
    'titulo':'Google',
    'url':'https://img.icons8.com/fluency/48/000000/google-plus.png'
    },
    {
      'titulo':'Whatsapp',
      'url':'https://img.icons8.com/fluency/48/000000/whatsapp.png'
    },
    {
      'titulo':'Telegram',
      'url':'https://img.icons8.com/color/48/000000/telegram-app--v3.png'
    }
  ]


















}
