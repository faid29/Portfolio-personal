import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEducacionComponent } from './form-educacion.component';

describe('FormEducacionComponent', () => {
  let component: FormEducacionComponent;
  let fixture: ComponentFixture<FormEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
