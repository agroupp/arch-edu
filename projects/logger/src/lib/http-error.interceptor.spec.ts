import { TestBed } from '@angular/core/testing';
import { LoggerService } from './logger.service';
import { RETRY } from './data/logger-constants';

import { HttpErrorInterceptor } from './http-error.interceptor';

describe('HttpErrorInterceptor', () => {
  let loggerServiceMock: any;

  beforeEach(() => {
    loggerServiceMock = jasmine.createSpyObj('PostsService', ['error']);
    TestBed.configureTestingModule({
      providers: [
          HttpErrorInterceptor,
          { provide: RETRY, useValue: 0},
          { provide: LoggerService, useValue: loggerServiceMock }
        ]
      });
  });

  it('should be created', () => {
    const interceptor: HttpErrorInterceptor = TestBed.inject(HttpErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
