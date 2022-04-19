import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaProyectosComponent } from './persona-proyectos.component';

describe('PersonaProyectosComponent', () => {
  let component: PersonaProyectosComponent;
  let fixture: ComponentFixture<PersonaProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaProyectosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
