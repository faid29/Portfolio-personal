import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaSoftsComponent } from './persona-softs.component';

describe('PersonaSoftsComponent', () => {
  let component: PersonaSoftsComponent;
  let fixture: ComponentFixture<PersonaSoftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaSoftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaSoftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
