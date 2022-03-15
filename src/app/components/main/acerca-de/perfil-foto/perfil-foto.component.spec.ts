import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFotoComponent } from './perfil-foto.component';

describe('PerfilFotoComponent', () => {
  let component: PerfilFotoComponent;
  let fixture: ComponentFixture<PerfilFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilFotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
