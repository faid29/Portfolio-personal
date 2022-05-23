import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-compartir',
  templateUrl: './boton-compartir.component.html',
  styleUrls: ['./boton-compartir.component.css']
})
export class BotonCompartirComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  shareData=[
    {
      'titulo':'Linkedln',
      'url':'https://img.icons8.com/fluency/48/000000/linkedin.png',
      'a':'https://www.linkedin.com/sharing/share-offsite/?url=https://www.linkedin.com/in/rubenisarco/',
    },
    {
      'tiulo':'Git',
      'url':'https://img.icons8.com/fluency/48/000000/github.png',
      'a':'https://www.linkedin.com/sharing/share-offsite/?url=https://github.com/faid29/',
    },
    { 
    'titulo':'Twitter',
    'url':'https://img.icons8.com/fluency/344/twitter.png',
    'a':'https://twitter.com/intent/tweet?text=[text]&url=[https://twitter.com/ruben_sarco]&hashtags=[hashtag]"',
    },
    {
      'titulo':'Whatsapp',
      'url':'https://img.icons8.com/fluency/48/000000/whatsapp.png',
      'a':'https://api.whatsapp.com/send?text=[Hola soy Rubén Sarco, https://portafolio-rubensarco.web.app estás compartiendo mi portafolio]',
    },
    {
      'titulo':'Telegram',
      'url':'https://img.icons8.com/color/48/000000/telegram-app--v3.png',
      'a':'https://telegram.me/share/url?url=https://portafolio-rubensarco.web.app&text=Hola comparte mi portafolio, gracias',
    }
  ]

}
