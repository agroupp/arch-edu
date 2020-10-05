import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Route } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { MainLayoutComponent } from './main-layout/main-layout.component';

const routes: Route[] = [
  { path: 'part-one', loadChildren: () => import('../features/part-one/part-one.module').then(m => m.PartOneModule)},
  { path: 'part-two', loadChildren: () => import('../features/part-two/part-two.module').then(m => m.PartTwoModule)},
  { path: '', redirectTo: '/part-one', pathMatch: 'full' }
];

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ],
  exports: [MainLayoutComponent]
})
export class CoreModule { }
