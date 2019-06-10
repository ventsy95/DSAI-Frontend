import { Component } from '@angular/core';

@Component({
    selector: 'test',
    template: `
        <div class="row">
            <div class="col-sm-12 col-md-2">
                <kendo-lineargauge #linear [pointer]="{ value: value }">
                </kendo-lineargauge>
            </div>
            <div class="col-sm-12 col-md-5">
                <kendo-radialgauge #radial [pointer]="{ value: value }">
                </kendo-radialgauge>
            </div>
            <div class="col-sm-12 col-md-5">
                <kendo-arcgauge #arc [value]="value">
                    <ng-template kendoArcGaugeCenterTemplate let-value="value">
                        {{ value }}
                    </ng-template>
                </kendo-arcgauge>
            </div>
        </div>
    `,
    styles: [`
        .k-gauge {
            display: block;
        }
    `]
})
export class TestComponent {

  public value: number = 30;
}