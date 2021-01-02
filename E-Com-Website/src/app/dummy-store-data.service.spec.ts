import { TestBed } from '@angular/core/testing';

import { DummyStoreDataService } from './dummy-store-data.service';

describe('DummyStoreDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DummyStoreDataService = TestBed.get(DummyStoreDataService);
    expect(service).toBeTruthy();
  });
});
