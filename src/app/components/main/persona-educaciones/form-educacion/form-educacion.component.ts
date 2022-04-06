import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion.model';

@Component({
  selector: 'app-form-educacion',
  templateUrl: './form-educacion.component.html',
  styleUrls: ['./form-educacion.component.css']
})
export class FormEducacionComponent implements OnInit {

  @Output() nuevaEducacion: EventEmitter<Educacion> = new EventEmitter();

  mostrarForm: boolean = false;
  form :  FormGroup;

  constructor(private formBuilder: FormBuilder) { 

    this.form =  this.formBuilder.group({
      id: [0],
      nombre_institucion: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(60),],],
      nombre_certificacion: ["", [Validators.required, Validators.min(3), Validators.max(60)]],
      fecha_inicio: ["", [Validators.required]],
      fecha_fin: ["", [Validators.required]],
      estado: ["", [Validators.required, Validators.min(3), Validators.max(20)]],
      descripcion_curso: ["", [Validators.required,Validators.min(10), Validators.max(256)]],
      imagen_institucion: [""],
    })

  }

  ngOnInit(): void {
  }

  setEducacion(educacion: Educacion) {
    this.form.patchValue({
      id: educacion.id,
      nombre_institucion: educacion.nombre_institucion,
      nombre_certificacion: educacion.nombre_certificacion,
      fecha_inicio: educacion.fecha_inicio,
      fecha_fin: educacion.fecha_fin,
      estado: educacion.estado,
      descripcion_curso: educacion.descripcion_curso,
      imagen_institucion: educacion.imagen_institucion
    });
    this.mostrarForm = true;
  }

  toggleForm() {
    this.mostrarForm = !this.mostrarForm;
  }

  onSubmit(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.nuevaEducacion.emit(this.form.value);
      this.form.reset();
      this.mostrarForm = false;
    } else {
      console.log("form no valido");
    }
  }

}
