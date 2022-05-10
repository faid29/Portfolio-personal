import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Soft } from 'src/app/model/soft.model';

@Component({
  selector: 'app-form-soft',
  templateUrl: './form-soft.component.html',
  styleUrls: ['./form-soft.component.css']
})
export class FormSoftComponent implements OnInit {

  	mostrarForm: boolean = false;
	  
	@Output() nuevaSoft: EventEmitter<Soft> = new EventEmitter();

	form: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.form = this.formBuilder.group({
			id: [0],
			nombre: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(60),],],
    	});
	}

	setSoft(soft: Soft) {
		this.form.patchValue({
			id: soft.id,
			nombre: soft.nombre
		});
		this.mostrarForm = true;
	}

	toggleForm() {
		this.mostrarForm = !this.mostrarForm;
	}

	onSubmit(event: Event) {
		event.preventDefault;
		if (this.form.valid) {
			this.nuevaSoft.emit(this.form.value);
			this.form.reset();
			this.mostrarForm = false;
		} else {
			console.log("form no valido");
		}
	}

  ngOnInit(): void {
  }

}
