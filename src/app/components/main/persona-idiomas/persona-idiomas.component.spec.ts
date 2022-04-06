import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaIdiomasComponent } from './persona-idiomas.component';

describe('PersonaIdiomasComponent', () => {
  let component: PersonaIdiomasComponent;
  let fixture: ComponentFixture<PersonaIdiomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaIdiomasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaIdiomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
