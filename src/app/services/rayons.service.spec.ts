import { TestBed } from '@angular/core/testing';

import { RayonsService } from './rayons.service';

describe('RayonsService', () => {
  let service: RayonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RayonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
