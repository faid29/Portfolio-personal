import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProfesionComponent } from './perfil-profesion.component';

describe('PerfilProfesionComponent', () => {
  let component: PerfilProfesionComponent;
  let fixture: ComponentFixture<PerfilProfesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilProfesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilProfesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
