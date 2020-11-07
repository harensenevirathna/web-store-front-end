import { TestBed } from '@angular/core/testing';

import { WebstoreService } from './webstore.service';

describe('WebstoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebstoreService = TestBed.get(WebstoreService);
    expect(service).toBeTruthy();
  });
});
