import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { CarData } from '../models/cardata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  private model: CarData;
  private dataSubscriber: Subscription;
  private errorSubscriber: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.model = new CarData();

    this.dataService.onConnect()
      .pipe(first())
      .subscribe(result => {
        console.log(result);
      },
      error => {
        console.log(error);
      });

    this.dataService.onDisconnect()
      .pipe(first())
      .subscribe(result => {
        console.log(result);
      },
      error => {
        console.log(error);
      });
    
    this.errorSubscriber = this.dataService.onError()
      .subscribe(result => {
        console.log(result);
      });

    this.dataSubscriber = this.dataService.getData()
      .subscribe((result: CarData) => {
        this.model = result;
        this.model.rpm/=1000;
        this.model.fuel/=100;
        console.log(result);
      },
      error => {
        console.log(error);
      });

      // (tlazarov) TODO: Remove usage of dummy data after finishing
     this.constructDummyModel();
  }

  ngOnDestroy(): void {
    this.dataSubscriber.unsubscribe();
    this.errorSubscriber.unsubscribe();
  }

  constructDummyModel(): void {
    this.model.air_humidity = 0.01;
    this.model.air_temp = 401.020000;
    this.model.engine_temp = 90.600000;
    this.model.engine_warning = 'P0000';
    this.model.fog_lamp = false;
    this.model.fuel =0.9;
    this.model.gps_latitude = 42.608219;
    this.model.gps_longitude = 23.603122;
    this.model.handbrake = false;
    this.model.hazard_lamp = true;
    this.model.rpm = 3.5;
    this.model.speed = 120;
  }
}
