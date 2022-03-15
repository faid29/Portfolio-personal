import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEducacionComponent } from './info-educacion.component';

describe('InfoEducacionComponent', () => {
  let component: InfoEducacionComponent;
  let fixture: ComponentFixture<InfoEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
