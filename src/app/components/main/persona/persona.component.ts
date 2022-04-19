import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona;
  @Output() borrarS: EventEmitter<number> = new EventEmitter();
  @Output() editarS: EventEmitter<Persona> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  borrarPersona(): void {
    this.borrarS.emit(this.persona.id)
  }

  editarPersona(): void {
    this.editarS.emit(this.persona)
  }
}
