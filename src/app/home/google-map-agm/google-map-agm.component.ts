import { Component, OnInit, NgZone, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MapsAPILoader, AgmMarker } from '@agm/core';

@Component({
  selector: 'app-google-map-agm',
  templateUrl: './google-map-agm.component.html',
  styleUrls: ['./google-map-agm.component.css']
})
export class GoogleMapAgmComponent implements OnInit {

  public latitude:number;
  public longitude:number;
  public searchControl: FormControl;
  public zoom: number;
  lockationChosen = false;
 
  @ViewChild("search")
  public searchElementRef: ElementRef;
  
  constructor(private router : Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
      // установим широту и долготу и zoom по умолчанию
    this.zoom = 12;
    //this.latitude = 49.017950;
    //this.longitude = 23.812735;
  
    // создаём новый search FormControl
    this.searchControl = new FormControl();
  
    // устанавливаем на карту текущее местоположение посетителя
    this.setCurrentPosition();
  
    // загружаем места для автодополнения
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // получаем результаты с местом
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
  
          // проверяем результат
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
  console.log(place.adr_address);
  console.log(place);
  length = place.address_components.length;
  console.log(length);
  console.log(place.address_components[2].long_name);
  console.log(place.address_components[length-1].long_name);
  

          // установим широту, долготу и zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
        });
      });
    });    
  }
  
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  marker: marker;

  mapClicked(event){
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.lockationChosen = true;

  }

  infoWindowOpened = null;
  clickedMarker(label: string, infoWindow) {
    if( this.infoWindowOpened ===  infoWindow)
      return;     
    if(this.infoWindowOpened !== null)
      this.infoWindowOpened.close();      
    this.infoWindowOpened = infoWindow;
  }
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
