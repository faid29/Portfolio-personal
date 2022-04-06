import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIdiomaComponent } from './form-idioma.component';

describe('FormIdiomaComponent', () => {
  let component: FormIdiomaComponent;
  let fixture: ComponentFixture<FormIdiomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIdiomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIdiomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
