import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sq-logger',
  template: `
    <p>
      logger works!
    </p>
  `,
  styles: [
  ]
})
export class LoggerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
