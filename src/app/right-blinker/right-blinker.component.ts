import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'right-blinker',
  templateUrl: './right-blinker.component.html',
  styleUrls: ['./right-blinker.component.scss']
})
export class RightBlinkerComponent implements OnInit {
  @Input() isHazardLampOn: Boolean = false;
  @Input() isRightBlinkerOn:Boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
