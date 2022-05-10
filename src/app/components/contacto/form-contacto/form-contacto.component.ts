import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contacto } from 'src/app/model/contacto.model';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css']
})
export class FormContactoComponent implements OnInit {

  @Output() nuevaContacto: EventEmitter<Contacto> = new EventEmitter();
  form :  FormGroup;
  mostrarForm: boolean = false;

  constructor(private formBuilder: FormBuilder) { 

    this.form =  this.formBuilder.group({
      id: [0],
      nombre: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(60)],],
      email: ["", [Validators.required]],
      asunto: ["", [Validators.required, Validators.minLength(3),Validators.maxLength(60)]],
      mensaje: ["", [Validators.required]],
    })
    this.mostrarForm = true;
  }

  ngOnInit(): void {
  }

  setContacto(contacto: Contacto) {
    this.form.patchValue({
      id: contacto.id,
      nombre: contacto.nombre,
      email: contacto.email,
      asunto: contacto.asunto,
      mensaje: contacto.mensaje,

    });
  }

  toggleForm() {
    this.mostrarForm = !this.mostrarForm;
  }

  onSubmit(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.nuevaContacto.emit(this.form.value);
      this.form.reset();
      this.mostrarForm = true;
    } else {
      console.log("form no valido");
    }
  }




}
