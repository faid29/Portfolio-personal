import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCompartirComponent } from './boton-compartir.component';

describe('BotonCompartirComponent', () => {
  let component: BotonCompartirComponent;
  let fixture: ComponentFixture<BotonCompartirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonCompartirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonCompartirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
