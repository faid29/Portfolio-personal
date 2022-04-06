import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLaboralComponent } from './form-laboral.component';

describe('FormLaboralComponent', () => {
  let component: FormLaboralComponent;
  let fixture: ComponentFixture<FormLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLaboralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
