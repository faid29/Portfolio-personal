import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {

  @Output() nuevaPersona: EventEmitter<Persona> = new EventEmitter();

  mostrarForm: boolean = false;
  form:FormGroup;

  constructor(private formBuilder: FormBuilder){

    this.form= this.formBuilder.group({
      id:[0],
      nombre:['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)] ],
      apellido:['',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email:['',[Validators.required, Validators.email ]],
      password:['', [Validators.required]],
      telefono:[''],
      pais:['', [Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
      ciudad:['', [Validators.minLength(3), Validators.maxLength(20)]],
      estado_civil:['',[Validators.minLength(3),Validators.maxLength(20)]], 
      direccion:['',[Validators.minLength(3),Validators.maxLength(20)]],
      edad:[0,[Validators.required, Validators.minLength(3),Validators.maxLength(100)]],
      foto:['']
    })
  }

  ngOnInit(): void {
    
  }

  setPersona(persona: Persona) {
    this.form.patchValue({
      id: persona.id,
      nombre: persona.nombre,
      apellido: persona.apellido,
      email: persona.email,
      password: persona.password,
      telefono: persona.telefono,
      pais: persona.pais,
      ciudad: persona.ciudad,
      estado_civil: persona.estado_civil,
      direccion: persona.direccion,
      edad: persona.edad,
      foto: persona.foto
    });

    this.mostrarForm = true;
  }

  toggleForm() {
    this.mostrarForm = !this.mostrarForm;
  }

  onSubmit(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.nuevaPersona.emit(this.form.value);
      this.form.reset();
      this.mostrarForm = true;
    } else {
      console.log("form no valido");
    }
  }

}
