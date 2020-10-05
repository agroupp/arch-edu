import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Post } from '@data';
import { PostsService } from '@services';
import { of } from 'rxjs';

import { PostsListComponent } from './posts-list.component';

const POSTS: Post[] = [
  {
    userId: 1,
    id: 1,
    title: 'Title 11',
    body: 'Body 11'
  },
  {
    userId: 1,
    id: 2,
    title: 'Title 12',
    body: 'Body 12'
  },
  {
    userId: 2,
    id: 3,
    title: 'Title 21',
    body: 'Body 21'
  },
  {
    userId: 2,
    id: 4,
    title: 'Title 22',
    body: 'Body 22'
  },
  {
    userId: 2,
    id: 5,
    title: 'Title 23',
    body: 'Body 23'
  },
];

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;
  let postsServiceMock: any;
  let lists: DebugElement[];

  beforeEach(async () => {
    postsServiceMock = jasmine.createSpyObj('PostsService', ['getPosts']);
    postsServiceMock.getPosts.and.returnValue(of(POSTS));
    await TestBed.configureTestingModule({
      declarations: [ PostsListComponent ],
      providers: [
        {provide: PostsService, useValue: postsServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    lists = getLists(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create two lists', () => {
    expect(lists.length).toEqual(2);
  });

  it('should create two lines at the first list', () => {
    const list = lists[0];
    expect(list.queryAll(By.css('li')).length).toEqual(2);
  });

  it('should create three lines at the second list', () => {
    const list = lists[1];
    expect(list.queryAll(By.css('li')).length).toEqual(3);
  });

  it('list 1 should have elements with text "Title 11", "Title 12"', () => {
    const lis = lists[0].queryAll(By.css('li'));
    lis.forEach((li: DebugElement, i: number) =>
      expect((li.nativeElement as HTMLLIElement).textContent).toEqual(`Title 1${i + 1}`));
  });

  it('list 2 should have elements with text "Title 21", "Title 22", "Title 23"', () => {
    const lis = lists[1].queryAll(By.css('li'));
    lis.forEach((li: DebugElement, i: number) =>
      expect((li.nativeElement as HTMLLIElement).textContent).toEqual(`Title 2${i + 1}`));
  });
});

function getLists(fixture: ComponentFixture<PostsListComponent>): DebugElement[] {
  return fixture.debugElement.queryAll(By.css('ul'));
}
