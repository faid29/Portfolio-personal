import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto.model';

@Component({
  selector: 'app-form-proyecto',
  templateUrl: './form-proyecto.component.html',
  styleUrls: ['./form-proyecto.component.css']
})
export class FormProyectoComponent implements OnInit {

  @Output() nuevaProyecto: EventEmitter<Proyecto> = new EventEmitter();

  mostrarForm: boolean = false;
  form :  FormGroup;

  constructor(private formBuilder: FormBuilder) { 

    this.form =  this.formBuilder.group({
      id: [0],
      titulo_proyecto: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(60),],],
      fecha_proyecto: ["", [Validators.required]],
      imagen_proyecto: [""],
      imagen_proyecto1: [""],
      imagen_proyecto2: [""],
      imagen_proyecto3: [""],
      descripcion_proyecto: ["", [Validators.required,Validators.min(5), Validators.max(256)]],
    })

  }

  ngOnInit(): void {
  }

  setProyecto(proyecto: Proyecto) {
    this.form.patchValue({
      id: proyecto.id,
      titulo_proyecto: proyecto.titulo_proyecto,
      fecha_proyecto: proyecto.fecha_proyecto,
      imagen_proyecto: proyecto.imagen_proyecto,
      imagen_proyecto1: proyecto.imagen_proyecto1,
      imagen_proyecto2: proyecto.imagen_proyecto2,
      imagen_proyecto3: proyecto.imagen_proyecto3,
      descripcion_proyecto: proyecto.descripcion_proyecto,
    });
    this.mostrarForm = true;
  }

  toggleForm() {
    this.mostrarForm = !this.mostrarForm;
  }

  onSubmit(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.nuevaProyecto.emit(this.form.value);
      this.form.reset();
      this.mostrarForm = false;
    } else {
      console.log("form no valido");
    }
  }

}
