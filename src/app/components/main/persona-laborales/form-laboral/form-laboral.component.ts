import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Laboral } from 'src/app/model/laboral.model';

@Component({
  selector: 'app-form-laboral',
  templateUrl: './form-laboral.component.html',
  styleUrls: ['./form-laboral.component.css']
})
export class FormLaboralComponent implements OnInit {

  @Output() nuevaLaboral: EventEmitter<Laboral> = new EventEmitter();

  mostrarForm: boolean = false;
  form :  FormGroup;

  constructor(private formBuilder: FormBuilder) { 

    this.form =  this.formBuilder.group({
      id: [0],
      nombre_empresa: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(60),],],
      puesto: ["", [Validators.required, Validators.min(5), Validators.max(60)]],
      fecha_desde: ["", [Validators.required]],
      fecha_hasta: ["", [Validators.required]],
      descripcion_laboral: ["", [Validators.required,Validators.min(5), Validators.max(256)]],
    })

  }

  ngOnInit(): void {
  }

  setLaboral(laboral: Laboral) {
    this.form.patchValue({
      id: laboral.id,
      titulo_profesion: laboral.nombre_empresa,
      puesto: laboral.puesto,
      fecha_desde: laboral.fecha_desde,
      fecha_hasta: laboral.fecha_hasta,
      descripcion_laboral: laboral.descripcion_laboral,
    });
    this.mostrarForm = true;
  }

  toggleForm() {
    this.mostrarForm = !this.mostrarForm;
  }

  onSubmit(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.nuevaLaboral.emit(this.form.value);
      this.form.reset();
      this.mostrarForm = false;
    } else {
      console.log("form no valido");
    }
  }

}
