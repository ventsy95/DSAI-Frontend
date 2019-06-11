import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'left-blinker',
  templateUrl: './left-blinker.component.html',
  styleUrls: ['./left-blinker.component.scss']
})
export class LeftBlinkerComponent implements OnInit {
  isLeftBlinkerOn:Boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
