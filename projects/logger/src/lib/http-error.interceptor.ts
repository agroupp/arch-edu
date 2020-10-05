import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoggerService } from './logger.service';
import { catchError, retry } from 'rxjs/operators';
import { RETRY } from './data/logger-constants';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    @Inject(RETRY) private retryNumber: number,
    private loggerService: LoggerService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(this.retryNumber),
      catchError(err => of(this.loggerService.error(err)))
    ) as Observable<HttpEvent<unknown>>;
  }
}
