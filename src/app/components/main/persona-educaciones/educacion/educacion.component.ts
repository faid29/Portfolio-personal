import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/model/educacion.model';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  @Input() educacion: Educacion;
  @Output() borrarS: EventEmitter<number> = new EventEmitter();
  @Output() editarS: EventEmitter<Educacion> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  borrarEducacion(): void {
    this.borrarS.emit(this.educacion.id)
  }

  editarEducacion(): void {
    this.editarS.emit(this.educacion)
  }
}
