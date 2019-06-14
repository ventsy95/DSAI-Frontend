import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';

declare var H: any;

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent  {

  @Input() lat : number;
  @Input() lng : number;

  private platform: any;

  @ViewChild("map", { static: false })
  public mapElement: ElementRef;

  public constructor() {
      this.platform = new H.service.Platform({
          "app_id": "rDTiyvI6tZ4rmoEBOSMH",
          "app_code": "0E04-ZSVqpG81XwqshvEsg"
      });
  }

  public ngOnInit() { }

  public ngAfterViewInit() {
      let defaultLayers = this.platform.createDefaultLayers();
      let map = new H.Map(
          this.mapElement.nativeElement,
          defaultLayers.normal.transit,
          {
              zoom: 13,
              center: { lat: this.lat, lng: this.lng }
          }
      );

      let startMarker = new H.map.Marker({
        lat: this.lat,
        lng: this.lng
      });
      map.addObjects([startMarker]);

  }
  
  /*
  @ViewChild('gmap', { read: true, static: false }) gmapElement: any;
  map: google.maps.Map;

  ngOnInit() {
    (function(){

      function initMap(){
        var map = new google.maps.Map(document.getElementById('map'), {
          center: { lat: 34.397, lng: 150.644 },
          scrollwheel: false,
          zoom: 2
        });
      }
      
      })();
    
  }*/
}
