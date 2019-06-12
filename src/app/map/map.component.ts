import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent  {

  constructor() { }
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
