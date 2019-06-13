import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { DataService } from '../services/data.service';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };
import { DashboardComponent } from './dashboard/dashboard.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { TestComponent } from './test/test.component';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { LeftBlinkerComponent } from './left-blinker/left-blinker.component';
import { RightBlinkerComponent } from './right-blinker/right-blinker.component';
import { EngineWarningComponent } from './engine-warning/engine-warning.component';
import { FogLampComponent } from './fog-lamp/fog-lamp.component';
import { HandbrakeComponent } from './handbrake/handbrake.component';

import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TestComponent,
    LeftBlinkerComponent,
    RightBlinkerComponent,
    EngineWarningComponent,
    FogLampComponent,
    HandbrakeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
    InputsModule,
    BrowserAnimationsModule,
    GridModule,
    ButtonsModule,
    GaugesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBm4L8oKSEWoNz5aPXcp5yBip_MCHJQQdE'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
