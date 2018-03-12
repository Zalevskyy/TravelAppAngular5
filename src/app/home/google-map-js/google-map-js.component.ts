import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map-js',
  templateUrl: './google-map-js.component.html',
  styleUrls: ['./google-map-js.component.css']
})
export class GoogleMapJsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function initMap() {
      var uluru = {lat: -25.363, lng: 131.044};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
  }

}
