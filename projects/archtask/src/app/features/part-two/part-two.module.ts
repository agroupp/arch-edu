import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsLayoutComponent } from './posts-layout/posts-layout.component';
import { PostDialogComponent } from './dialogs/post-dialog/post-dialog.component';



@NgModule({
  declarations: [PostsLayoutComponent, PostDialogComponent],
  imports: [
    CommonModule
  ]
})
export class PartTwoModule { }
