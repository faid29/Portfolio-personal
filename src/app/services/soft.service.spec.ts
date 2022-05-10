import { TestBed } from '@angular/core/testing';

import { SoftService } from './soft.service';

describe('SoftService', () => {
  let service: SoftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
