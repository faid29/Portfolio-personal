import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Idioma } from 'src/app/model/idioma.model';

@Component({
  selector: 'app-form-idioma',
  templateUrl: './form-idioma.component.html',
  styleUrls: ['./form-idioma.component.css']
})
export class FormIdiomaComponent implements OnInit {

  @Output() nuevaIdioma: EventEmitter<Idioma> = new EventEmitter();

  mostrarForm: boolean = false;
  form :  FormGroup;

  constructor(private formBuilder: FormBuilder) { 

    this.form =  this.formBuilder.group({
      id: [0],
      nombre_idioma: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(60),],],
      nivel_idioma: ["", [Validators.required, Validators.minLength(3),Validators.maxLength(10)]],
    })

  }

  ngOnInit(): void {
  }

  setIdioma(idioma: Idioma) {
    this.form.patchValue({
      id: idioma.id,
      nombre_idioma: idioma.nombre_idioma,
      nivel_idioma: idioma.nivel_idioma,
    });
    this.mostrarForm = true;
  }

  toggleForm() {
    this.mostrarForm = !this.mostrarForm;
  }

  onSubmit(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.nuevaIdioma.emit(this.form.value);
      this.form.reset();
      this.mostrarForm = false;
    } else {
      console.log("form no valido");
    }
  }


}
