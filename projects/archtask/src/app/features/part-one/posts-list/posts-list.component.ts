import { Component, OnInit } from '@angular/core';
import { PostsService } from '@services';
import { Post } from '@data';
import { interval, Observable } from 'rxjs';
import { groupBy, mergeMap, reduce, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'sq-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  posts$: Observable<Post[][]> = interval(60000).pipe(
    startWith(0),
    switchMap(() => this.postsService.getPosts().pipe(
      mergeMap(posts => posts),
      groupBy(post => post.userId),
      mergeMap(group$ => group$.pipe(reduce((acc: Post[], current) => [...acc, current], []))),
      reduce((acc: Post[][], current: Post[]) => [...acc, current], [])
    ))
  );

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    // For testing logger only, will fail unit test
    // throw new Error('test error');
  }

}
