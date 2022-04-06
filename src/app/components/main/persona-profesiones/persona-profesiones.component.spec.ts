import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaProfesionesComponent } from './persona-profesiones.component';

describe('PersonaProfesionesComponent', () => {
  let component: PersonaProfesionesComponent;
  let fixture: ComponentFixture<PersonaProfesionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaProfesionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaProfesionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
