import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Idioma } from 'src/app/model/idioma.model';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {

  @Input() idioma: Idioma;
  @Output() borrarS: EventEmitter<number> = new EventEmitter();
  @Output() editarS: EventEmitter<Idioma> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  borrarIdioma(): void {
    this.borrarS.emit(this.idioma.id)
  }

  editarIdioma(): void {
    this.editarS.emit(this.idioma)
  }

}
