import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'handbrake',
  templateUrl: './handbrake.component.html',
  styleUrls: ['./handbrake.component.scss']
})
export class HandbrakeComponent implements OnInit {

  @Input() ishandbrakeUp: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
