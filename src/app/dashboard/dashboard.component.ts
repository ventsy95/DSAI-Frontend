import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery/dist/jquery.min.js';

declare var kendo: any;

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  public value: number = 30;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.value += 50; 
      }, 3000);
   /* $(document).ready(() => {
      this.animateInterval = null;

      this.createDashboard();
      this.animateDashboard();

      $(document).bind("kendo:skinChange", (e) => {
        this.createDashboard();
      });

      $(document).bind("kendo:pageUnload", (e) => {
        clearInterval(this.animateInterval);
      });
    });*/
  }

  ngAfterViewInit() {

  }

  /*public createDashboard() {
    $("#rpm").kendoRadialGauge({
      theme: "black",

      pointer: {
        value: 0,
        color: "#ea7001"
      },

      scale: {
        startAngle: -45,
        endAngle: 120,

        min: 0,
        max: 6,

        majorUnit: 1,
        majorTicks: {
          width: 1,
          size: 7
        },

        minorUnit: 0.2,
        minorTicks: {
          size: 5
        },

        ranges: [{
          from: 4,
          to: 5,
          color: "#ff7a00"
        }, {
          from: 5,
          to: 6,
          color: "#c20000"
        }],

        labels: {
          font: "11px Arial,Helvetica,sans-serif"
        }
      }
    });

    $("#kmh").kendoRadialGauge({
      theme: "black",

      pointer: {
        value: 0,
        color: "#ea7001"
      },

      scale: {
        startAngle: -60,
        endAngle: 240,

        min: 0,
        max: 220,

        majorTicks: {
          width: 1,
          size: 14
        },
        majorUnit: 20,

        minorTicks: {
          size: 10
        },

        minorUnit: 2
      }
    });

    $("#fuel").kendoRadialGauge({
      theme: "black",

      pointer: {
        value: 0.5,
        color: "#ea7001"
      },

      scale: {
        startAngle: 90,
        endAngle: 180,

        min: 0,
        max: 1,

        majorUnit: 0.5,
        majorTicks: {
          width: 2,
          size: 6
        },

        minorUnit: 0.25,
        minorTicks: {
          size: 3
        },

        ranges: [{
          from: 0,
          to: 0.1,
          color: "#c20000"
        }],

        labels: {
          font: "9px Arial,Helvetica,sans-serif"
        }
      }
    });

    $("#water-temprature").kendoRadialGauge({
      theme: "black",

      pointer: {
        value: 90,
        color: "#ea7001"
      },

      scale: {
        startAngle: 180,
        endAngle: 270,

        min: 60,
        max: 120,

        majorUnit: 30,
        majorTicks: {
          width: 2,
          size: 6
        },

        minorUnit: 10,
        minorTicks: {
          size: 3
        },

        ranges: [{
          from: 110,
          to: 120,
          color: "#c20000"
        }],

        labels: {
          font: "9px Arial,Helvetica,sans-serif"
        }
      }
    });
  }

  animateInterval;
  animateDashboard = function () {
    if (this.animateInterval) {
      return;
    }

    var GEARS = [0.14, 0.06, 0.035, 0.027, 0.019],
      IDLE_RPM = 0.9,
      CHANGE_RPM = 4,
      CHANGE_DELAY = 400,
      DECAY_RATE = 0.0017,
      TOP_SPEED = 210,
      ACCELERATION = 0.6,
      INTERVAL = 50;

    var speed = 0,
      skip = 0,
      ratio,
      gear = 0;

    function update() {
      $("#rpm").data("kendoRadialGauge").value(GEARS[gear] * speed + IDLE_RPM);
      $("#kmh").data("kendoRadialGauge").value(speed);
    }

    this.animateInterval = setInterval(function () {
      if (speed < TOP_SPEED) {
        if (GEARS[gear] * speed > CHANGE_RPM && gear < GEARS.length) {
          gear++;
          skip = CHANGE_DELAY / INTERVAL;
          update();
        }

        if (skip-- < 0) {
          speed += ACCELERATION - (DECAY_RATE * speed);
          update();
        }
      } else {
        skip = 100;
        speed = 0;
        gear = 0;
      }
    }, INTERVAL);
  }
*/
}
