import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';
import { SkillService } from 'src/app/services/skill.service';
import { FormSkillComponent } from './form-skill/form-skill.component';

@Component({
  selector: 'app-persona-skills',
  templateUrl: './persona-skills.component.html',
  styleUrls: ['./persona-skills.component.css']
})
export class PersonaSkillsComponent implements OnInit {

  @ViewChild("formSkill") formSkill!: FormSkillComponent;
	@Input() skills: Skill[] = [];

	constructor(private skillSevice: SkillService) {}

	crearNuevaSkill(skill: Skill) {
		if (skill.id) {
			this.skillSevice.editarSkill(skill).subscribe((skillEditada) => {
				this.actualizarPrimeraSkill(skillEditada);
			});
		} else {
			this.skillSevice
				.nuevaSkill(skill)
				.subscribe((nuevaskill) => this.skills.push(nuevaskill));
		}
	}

	borrarSkill(id: number) {
		this.skillSevice.borrarSkill(id).subscribe(() => {
			this.skills = this.skills.filter((t) => t.id !== id);
		});
	}

	private actualizarPrimeraSkill(skill: Skill) {
		for (let index = 0; index < this.skills.length; index++) {
			if (this.skills[index].id === skill.id) {
				this.skills[index] = skill;
				break;
			}
		}
	}

  toggleForm() {
    this.formSkill.toggleForm();
  }

	editarSkill(skill: Skill) {
		this.formSkill.setSkill(skill);
	}

  ngOnInit(): void {
  }

}
