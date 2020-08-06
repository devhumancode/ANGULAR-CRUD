import { TestBed } from '@angular/core/testing';

import { NumberplatesService } from './numberplates.service';

describe('NumberplatesService', () => {
  let service: NumberplatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberplatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
