import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaSkillsComponent } from './persona-skills.component';

describe('PersonaSkillsComponent', () => {
  let component: PersonaSkillsComponent;
  let fixture: ComponentFixture<PersonaSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
