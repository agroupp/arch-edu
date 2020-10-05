import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import {MatExpansionModule} from '@angular/material/expansion';

import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Route[] = [
  { path: '', component: PostsListComponent }
];

@NgModule({
  declarations: [PostsListComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    RouterModule.forChild(routes)
  ]
})
export class PartOneModule { }
