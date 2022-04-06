import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profesion } from 'src/app/model/profesion.model';


@Component({
  selector: 'app-profesion',
  templateUrl: './profesion.component.html',
  styleUrls: ['./profesion.component.css']
})
export class ProfesionComponent implements OnInit {

  @Input() profesion: Profesion;
  @Output() borrarS: EventEmitter<number> = new EventEmitter();
  @Output() editarS: EventEmitter<Profesion> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  borrarProfesion(): void {
    this.borrarS.emit(this.profesion.id)
  }

  editarProfesion(): void {
    this.editarS.emit(this.profesion)
  }

}
