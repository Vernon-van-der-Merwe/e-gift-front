import { TestBed } from '@angular/core/testing';

import { MerchantDataService } from './merchant-data.service';

describe('MerchantDataService', () => {
  let service: MerchantDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerchantDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
