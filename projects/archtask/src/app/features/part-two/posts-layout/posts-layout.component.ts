import { Component, OnInit } from '@angular/core';
import { PostsService } from '@services';
import { Post } from '@data';
import { Observable } from 'rxjs';
import { concatMap, mergeMap, takeWhile } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { PostDialogComponent } from '../dialogs/post-dialog/post-dialog.component';

@Component({
  selector: 'sq-posts-layout',
  templateUrl: './posts-layout.component.html',
  styleUrls: ['./posts-layout.component.scss']
})
export class PostsLayoutComponent implements OnInit {
  posts$: Observable<Post> = this.postsService.getPosts().pipe(
    mergeMap(posts => posts)
  );
  constructor(private postsService: PostsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.posts$.pipe(
      concatMap(post => this.dialog.open(PostDialogComponent, {data: post}).afterClosed()),
      takeWhile(val => !val)
    )
    .subscribe(console.log)
  }
}
