import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'engine-warning',
  templateUrl: './engine-warning.component.html',
  styleUrls: ['./engine-warning.component.scss']
})
export class EngineWarningComponent implements OnChanges {

  @Input() warningCode: any;

  isEngineWarningOn: Boolean = false;

  constructor() { }

  ngOnChanges() {

    if (this.warningCode && this.warningCode  !== 'P0000') {
      this.isEngineWarningOn = true;
    } else {
      this.isEngineWarningOn = false;
    }
    console.log(this.isEngineWarningOn);
  }

}
