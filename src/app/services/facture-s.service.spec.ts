import { TestBed } from '@angular/core/testing';

import { FactureSService } from './api.service';

describe('FactureSService', () => {
  let service: FactureSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactureSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
