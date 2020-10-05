import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerModule } from 'logger';
import { environment } from 'projects/archtask/src/environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoggerModule.instrument({ isLogging: !environment.production, localStorageKey: '__arch_log', retry: 3 })
  ]
})
export class ErrorHandlerModule { }
