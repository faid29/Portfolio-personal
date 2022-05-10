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
      'a':'https://www.linkedin.com/sharing/share-offsite/?url=https://espai.es',
    },
    { 
    'titulo':'Google',
    'url':'https://img.icons8.com/fluency/48/000000/google-plus.png',
    'a':'https://twitter.com/intent/tweet?text=[text]&url=[url]&hashtags=[hashtag]"',
    },
    {
      'titulo':'Whatsapp',
      'url':'https://img.icons8.com/fluency/48/000000/whatsapp.png',
      'a':'https://api.whatsapp.com/send?text=[Hola soy Rubén Sarco, estás compartiendo mi portafolio]',
    },
    {
      'titulo':'Telegram',
      'url':'https://img.icons8.com/color/48/000000/telegram-app--v3.png',
      'a':'https://xn--r1a.link/share/url?url=https%3A%2F%2Fwww.facebook.com%2Fcreditos.anatuya.5&text=hola',
    },
    {
      'titulo':'Faceboo',
      'url':'https://img.icons8.com/fluency/48/000000/facebook-new.png',
      'a':'https://www.facebook.com/sharer/sharer.php?u=https://espai.es',
    }
  ]

}
