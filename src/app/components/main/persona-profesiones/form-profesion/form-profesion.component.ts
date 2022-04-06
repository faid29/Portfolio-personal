import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profesion } from 'src/app/model/profesion.model';

@Component({
  selector: 'app-form-profesion',
  templateUrl: './form-profesion.component.html',
  styleUrls: ['./form-profesion.component.css']
})
export class FormProfesionComponent implements OnInit {
  @Output() nuevaProfesion: EventEmitter<Profesion> = new EventEmitter();

  mostrarForm: boolean = false;
  form :  FormGroup;

  constructor(private formBuilder: FormBuilder) { 

    this.form =  this.formBuilder.group({
      id: [0],
      titulo_profesion: ["",
      [Validators.required,Validators.minLength(3),Validators.maxLength(60),],],
      descripcion_profesion: ["", [Validators.required, Validators.min(5), Validators.max(60)]],
    })

  }

  ngOnInit(): void {
  }

  setProfesion(profesion: Profesion) {
    this.form.patchValue({
      id: profesion.id,
      titulo_profesion: profesion.titulo_profesion,
      descripcion_profesion: profesion.descripcion_profesion,
    });
    this.mostrarForm = true;
  }

  toggleForm() {
    this.mostrarForm = !this.mostrarForm;
  }

  onSubmit(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.nuevaProfesion.emit(this.form.value);
      this.form.reset();
      this.mostrarForm = false;
    } else {
      console.log("form no valido");
    }
  }


}
