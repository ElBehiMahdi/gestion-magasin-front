import { TestBed } from '@angular/core/testing';

import { ApiCService } from './api-c.service';

describe('ApiCService', () => {
  let service: ApiCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
