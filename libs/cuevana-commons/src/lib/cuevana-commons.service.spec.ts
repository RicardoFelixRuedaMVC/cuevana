import { TestBed } from '@angular/core/testing';

import { CuevanaCommonsService } from './cuevana-commons.service';

describe('CuevanaCommonsService', () => {
  let service: CuevanaCommonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuevanaCommonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
