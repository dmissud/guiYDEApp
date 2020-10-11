import {TestBed} from '@angular/core/testing';

import {OrganizationRootService} from './organization-root.service';

describe('OrganizationRootService', () => {
  let service: OrganizationRootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationRootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
