import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { PostsLayoutComponent } from './posts-layout/posts-layout.component';
import { PostDialogComponent } from './dialogs/post-dialog/post-dialog.component';

const routes: Route[] = [
  { path: '', component: PostsLayoutComponent }
];

@NgModule({
  declarations: [PostsLayoutComponent, PostDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forChild(routes)
  ]
})
export class PartTwoModule { }
