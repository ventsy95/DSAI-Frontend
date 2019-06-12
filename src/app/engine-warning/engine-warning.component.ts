import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'engine-warning',
  templateUrl: './engine-warning.component.html',
  styleUrls: ['./engine-warning.component.scss']
})
export class EngineWarningComponent implements OnInit {

  @Input() warningCode: any;

  isEngineWarningOn: Boolean = false;

  constructor() { }

  ngOnInit() {
    if (this.warningCode === 'P0000') {
      this.isEngineWarningOn = false;
    } else {
      this.isEngineWarningOn = true;
    }
  }

}
