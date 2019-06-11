import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'right-blinker',
  templateUrl: './right-blinker.component.html',
  styleUrls: ['./right-blinker.component.scss']
})
export class RightBlinkerComponent implements OnInit {
  isRightBlinkerOn:Boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
