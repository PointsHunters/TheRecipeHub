import { TestBed } from '@angular/core/testing';

import { ScreenSizeCheckService } from './screen-size-check.service';

describe('ScreenSizeCheckService', () => {
  let service: ScreenSizeCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenSizeCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
