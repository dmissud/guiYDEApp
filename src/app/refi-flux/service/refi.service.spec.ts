import {TestBed} from '@angular/core/testing';

import {RefiService} from './refi.service';

describe('RefiService', () => {
  let service: RefiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
