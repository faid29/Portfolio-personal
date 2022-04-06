import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaLaboralesComponent } from './persona-laborales.component';

describe('PersonaLaboralesComponent', () => {
  let component: PersonaLaboralesComponent;
  let fixture: ComponentFixture<PersonaLaboralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaLaboralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaLaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
