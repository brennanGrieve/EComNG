import { TestBed } from '@angular/core/testing';

import { StoreDataClientService } from './store-data-client-service.service';

describe('StoreDataClientServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreDataClientService = TestBed.get(StoreDataClientService);
    expect(service).toBeTruthy();
  });
});
