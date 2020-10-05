import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostDialogComponent } from './post-dialog.component';

const DATA_MOCK = {
  body: 'quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto',
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  userId: 1
};

describe('PostDialogComponent', () => {
  let component: PostDialogComponent;
  let fixture: ComponentFixture<PostDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDialogComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: DATA_MOCK }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
