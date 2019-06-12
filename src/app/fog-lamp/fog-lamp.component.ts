import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fog-lamp',
  templateUrl: './fog-lamp.component.html',
  styleUrls: ['./fog-lamp.component.scss']
})
export class FogLampComponent implements OnInit {
  
  @Input() isFogLampOn: Boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

}
