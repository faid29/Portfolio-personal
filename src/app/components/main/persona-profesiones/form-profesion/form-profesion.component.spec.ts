import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfesionComponent } from './form-profesion.component';

describe('FormProfesionComponent', () => {
  let component: FormProfesionComponent;
  let fixture: ComponentFixture<FormProfesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProfesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
