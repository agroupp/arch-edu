import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { PostsService } from '@services';
import { of } from 'rxjs';

import { PostsLayoutComponent } from './posts-layout.component';

describe('PostsLayoutComponent', () => {
  let component: PostsLayoutComponent;
  let fixture: ComponentFixture<PostsLayoutComponent>;
  let postsServiceMock: any;

  beforeEach(async () => {
    postsServiceMock = jasmine.createSpyObj('PostsService', ['getPosts']);
    postsServiceMock.getPosts.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ PostsLayoutComponent ],
      providers: [
        {provide: PostsService, useValue: postsServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
