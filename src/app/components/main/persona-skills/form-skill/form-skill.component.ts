import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/model/skill.model';

@Component({
  selector: 'app-form-skill',
  templateUrl: './form-skill.component.html',
  styleUrls: ['./form-skill.component.css']
})
export class FormSkillComponent implements OnInit {

  mostrarForm: boolean = false;
	@Output() nuevaSkill: EventEmitter<Skill> = new EventEmitter();

	form: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.form = this.formBuilder.group({
			id: [0],
			nombre_skill: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(60),],],
			nivel: ["", [Validators.required, Validators.min(0), Validators.max(10)],],
			color_skill: [""],
    	});
	}

	setSkill(skill: Skill) {
		this.form.patchValue({
			id: skill.id,
			nombre_skill: skill.nombre_skill,
			nivel: skill.nivel,
			color_skill: skill.color_skill
		});
		this.mostrarForm = true;
	}

	toggleForm() {
		this.mostrarForm = !this.mostrarForm;
	}

	onSubmit(event: Event) {
		event.preventDefault;
		if (this.form.valid) {
			this.nuevaSkill.emit(this.form.value);
			this.form.reset();
			this.mostrarForm = false;
		} else {
			console.log("form no valido");
		}
	}

  ngOnInit(): void {
  }

}
