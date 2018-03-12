import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MapsAPILoader, AgmMarker } from '@agm/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  public latitude:number;
  public longitude:number;
  public searchControl: FormControl;
  public zoom: number;
 
  // @ViewChild("search")
  // public searchElementRef: ElementRef;
  
  constructor(private router : Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }


  ngOnInit() {
      // установим широту и долготу и zoom по умолчанию
    this.zoom = 12;
    this.latitude = 49.017950;
    this.longitude = 23.812735;
    var uluru = {lat: this.latitude, lng: this.longitude};

    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: this.zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    
    var marker = new google.maps.Marker({
      position: uluru,
      map: this.map,
      title:"Drag me!"
    });
  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)    
  }

  setCenter(e:any){
    e.preventDefault();
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));
  }  

}
   
    
  
  // function initMap() {
  //   var uluru = {lat: this.latitude, lng: this.longitude};
  //   var map = new google.maps.Map(document.getElementById('gmap'), {
  //     zoom: 10,
  //     center: uluru
  //   });

  // private setCurrentPosition() {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 12;
  //     });
  //   }
  //   else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }
  


