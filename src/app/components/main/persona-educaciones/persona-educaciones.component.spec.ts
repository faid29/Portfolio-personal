import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaEducacionesComponent } from './persona-educaciones.component';

describe('PersonaEducacionesComponent', () => {
  let component: PersonaEducacionesComponent;
  let fixture: ComponentFixture<PersonaEducacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaEducacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaEducacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
