import { Component, OnInit } from '@angular/core';
import { PerfilService } from './services/perfil.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portafolio-ruben';


  constructor(private perfilService: PerfilService){  
    console.log("el componenente fue creado")
  }

  ngOnInit(): void {
    console.log("el componenete se ha inizializado")
    this.perfilService.getPerfil()
    .subscribe((response: any) => console.log(response));
  }


}
