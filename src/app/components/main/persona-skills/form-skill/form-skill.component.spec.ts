import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkillComponent } from './form-skill.component';

describe('FormSkillComponent', () => {
  let component: FormSkillComponent;
  let fixture: ComponentFixture<FormSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSkillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
