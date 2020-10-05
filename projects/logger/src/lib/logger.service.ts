import { IS_LOGGING, LOCAL_STORAGE_KEY } from './data/logger-constants';
import { HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ErrorRecord } from './data/error-record';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(
    @Inject(IS_LOGGING) private isLogging: boolean,
    @Inject(LOCAL_STORAGE_KEY) private lsKey: string
  ) { }

  error(error: HttpErrorResponse | Error): void {
    if (!this.isLogging) {
      return;
    }
    const record: ErrorRecord = {
      message: error.message ? error.message : error.toString(),
      timestamp: Date.now()
    };
    console.log(record);
    this.logToLocalStorage(record);
  }

  logToLocalStorage(record: ErrorRecord): void {
    if (!localStorage) {
      return;
    }
    try {
      const currentStr = localStorage.getItem(this.lsKey);
      let current: ErrorRecord[] = [];
      if (currentStr) {
        current = JSON.parse(currentStr);
      }
      current.push(record);
      localStorage.setItem(this.lsKey, JSON.stringify(current));
    } catch(err) {
      console.log('Error saving to Local storage', err);
    }
  }
}

