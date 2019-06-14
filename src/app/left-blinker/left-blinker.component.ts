import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'left-blinker',
  templateUrl: './left-blinker.component.html',
  styleUrls: ['./left-blinker.component.scss']
})
export class LeftBlinkerComponent implements OnInit {
  @Input() isHazardLampOn: Boolean = false;
  @Input() isLeftBlinkerOn:Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
