import { TestBed } from '@angular/core/testing';
import { IS_LOGGING, LOCAL_STORAGE_KEY } from './data/logger-constants';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: IS_LOGGING, useValue: true },
        { provide: LOCAL_STORAGE_KEY, useValue: 'ls_key' },
      ]
    });
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
