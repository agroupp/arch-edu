import { IS_LOGGING, LOCAL_STORAGE_KEY, RETRY } from './data/logger-constants';
import { LoggerModuleConfig } from './data/logger-module-config';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, ModuleWithProviders, NgModule } from '@angular/core';
import { GlobalErrorHandler } from './global-error-handler';



@NgModule({
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ]
})
export class LoggerModule {
  static instrument(options: LoggerModuleConfig): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: IS_LOGGING, useValue: options.isLogging || true },
        { provide: LOCAL_STORAGE_KEY, useValue: options.localStorageKey || null },
        { provide: RETRY, useValue: options.retry || 0}
      ]
    };
  }
}
