import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from '@data';

@Component({
  selector: 'sq-post-dialog',
  templateUrl: './post-dialog.component.html',
  styleUrls: ['./post-dialog.component.scss']
})
export class PostDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Post) { }

  ngOnInit(): void {
  }

}
