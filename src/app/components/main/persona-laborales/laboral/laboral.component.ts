import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Laboral } from 'src/app/model/laboral.model';

@Component({
  selector: 'app-laboral',
  templateUrl: './laboral.component.html',
  styleUrls: ['./laboral.component.css']
})
export class LaboralComponent implements OnInit {

  @Input() laboral: Laboral;
  @Output() borrarS: EventEmitter<number> = new EventEmitter();
  @Output() editarS: EventEmitter<Laboral> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  borrarLaboral(): void {
    this.borrarS.emit(this.laboral.id)
  }

  editarLaboral(): void {
    this.editarS.emit(this.laboral)
  }

}
