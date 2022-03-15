import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openFile(){}
  uploadFile(){}
  

  Agregar(){

  }

  Eliminar(){

  }

  Modificar(){

  }

  Guardar(){
    
  }

  dataPerfil:any=[
    {
      'foto':'https://previews.123rf.com/images/jemastock/jemastock1708/jemastock170808048/84006665-ilustraci%C3%B3n-de-vector-de-imagen-de-hombre-personaje-persona-persona-masculina.jpg?fj=1',
      'nombre':'Rubén Ignacio',
      'apellido':'Sarco',
      'secundario':'Instituto San Alfonso Maria de Ligorio Nº 12',
      'curso1':'Full Stack Developer Jr',
      'curso2':'Full Stack con Python',
      'curso3':'',
      'curso4':'',
    }
  ]

}
