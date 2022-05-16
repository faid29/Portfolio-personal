import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contacto } from 'src/app/model/contacto.model';

@Component({
  selector: 'app-contacto-mensaje',
  templateUrl: './contacto-mensaje.component.html',
  styleUrls: ['./contacto-mensaje.component.css']
})

export class ContactoMensajeComponent implements OnInit {

  @Input() contacto: Contacto;
  @Output() borrarS: EventEmitter<number> = new EventEmitter();
  @Output() editarS: EventEmitter<Contacto> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  borrarContacto(): void {
    this.borrarS.emit(this.contacto.id)
  }

  editarContacto(): void {
    this.editarS.emit(this.contacto)
  }

}
