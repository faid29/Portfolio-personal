import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSoftComponent } from './form-soft.component';

describe('FormSoftComponent', () => {
  let component: FormSoftComponent;
  let fixture: ComponentFixture<FormSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSoftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
