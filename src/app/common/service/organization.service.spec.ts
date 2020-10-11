import {TestBed} from '@angular/core/testing';

import {TreeApplicationByOrganizationService} from './tree-application-by-organization.service';

describe('NodeService', () => {
  let service: TreeApplicationByOrganizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeApplicationByOrganizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
