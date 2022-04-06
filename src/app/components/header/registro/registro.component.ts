import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  cantMinChrNombre : number = 3
  cantMaxChrNombre : number = 20

  f:FormGroup;

 /*  Perfil =[{
    'id-':'',
    'nombre':'',
    'apellido':'',
    'email':'',
    'password':'',
    'telefono':'',
    'pais':'',
    'ciudad':'',
    'estado_civil':'',
    'direccion':'',
    'edad':''
  }] */

  constructor(private readonly fb : FormBuilder){ }

  ngOnInit(): void {
    this.f = this.initForm();
  }
 
  initForm(): FormGroup {
    return this.fb.group({
      nombre:['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(20)]) ],
      apellido:['',Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
      email:['',Validators.compose([Validators.required, Validators.email ])],
      password:['', [Validators.required]],
      telefono:['', [Validators.required]],
      pais:['', Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
      ciudad:['', Validators.compose([Validators.required,Validators.minLength(3), Validators.maxLength(20)])],
      /* estado_civil:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])], */
      direccion:['',Validators.compose([Validators.required,Validators.minLength(3),Validators.maxLength(20)])],
      edad:['',[Validators.required]]
    })
  }


  enviarRf(): void {
    this.f.reset()
    console.log(this.f.value)
  }

}
