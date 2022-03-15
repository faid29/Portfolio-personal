import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  f : FormGroup

  formu={
    nombre:'',
    apellido:'',
    emaill:'',
    password:'',
    pais:'',
    ciudad:'',
    estado_civil:'',
    direccion:'',
    edad:''
  }

  constructor(private fb: FormBuilder) { 
    this.f = fb.group({
      nombre:'',
      apellido:'',
      emaill:'',
      password:'',
      pais:'',
      ciudad:'',
      estado_civil:'',
      direccion:'',
      edad:''

    })
  }

  ngOnInit(): void {
  }

  
  enviar(){}

}
