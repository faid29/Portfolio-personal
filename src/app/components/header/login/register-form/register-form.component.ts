import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  form:FormGroup;

  constructor(private formBuilder: FormBuilder){

    this.form= this.formBuilder.group({
      id:[0],
      nombre:['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)] ],
      nombreUsuario:['',[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email:['',[Validators.required, Validators.email ]],
      password:['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      this.form.value
      this.form.reset();
    } else {
      console.log("form no valido");
    }
  }

}
