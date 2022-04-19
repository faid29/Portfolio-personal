import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto.model';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  @Input() proyecto: Proyecto;
  @Output() borrarS: EventEmitter<number> = new EventEmitter();
  @Output() editarS: EventEmitter<Proyecto> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  borrarProyecto(): void {
    this.borrarS.emit(this.proyecto.id)
  }

  editarProyecto(): void {
    this.editarS.emit(this.proyecto)
  }

}
