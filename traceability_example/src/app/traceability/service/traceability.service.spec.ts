import { TestBed } from '@angular/core/testing';

import { TraceabilityService } from './traceability.service';

describe('TraceabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraceabilityService = TestBed.get(TraceabilityService);
    expect(service).toBeTruthy();
  });
});
