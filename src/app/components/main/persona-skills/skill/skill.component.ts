import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from 'src/app/model/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  @Input() skill!: Skill;
  @Output() borrarS: EventEmitter<number> = new EventEmitter();
  @Output() editarS: EventEmitter<Skill> = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {}

  borrarSkill(): void {
    this.borrarS.emit(this.skill.id);
  }

  editarSkill(): void {
    this.editarS.emit(this.skill);
  }

}
