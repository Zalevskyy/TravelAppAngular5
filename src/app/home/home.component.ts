import { Component, OnInit, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // //@ViewChild('gmap') gmapElement: any;
  // //map: google.maps.Map;

  // public latitude:number;
  // public longitude:number;
  // public searchControl: FormControl;
  // public zoom: number;
 
  // @ViewChild("search")
  // public searchElementRef: ElementRef;
  
  constructor(
    private router : Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    
//   // установим широту и долготу и zoom по умолчанию
//   this.zoom = 4;
//   this.latitude = 49.017950;
//   this.longitude = 23.812735;

//   // создаём новый search FormControl
//   this.searchControl = new FormControl();

//   // устанавливаем на карту текущее местоположение посетителя
//   this.setCurrentPosition();

//   // загружаем места для автодополнения
//   this.mapsAPILoader.load().then(() => {
//     const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
//       types: ["address"]
//     });
//     autocomplete.addListener("place_changed", () => {
//       this.ngZone.run(() => {
//         // получаем результаты с местом
//         const place: google.maps.places.PlaceResult = autocomplete.getPlace();

//         // проверяем результат
//         if (place.geometry === undefined || place.geometry === null) {
//           return;
//         }

//         // установим широту, долготу и zoom
//         this.latitude = place.geometry.location.lat();
//         this.longitude = place.geometry.location.lng();
//         this.zoom = 12;
//         var uluru = {lat: -25.363, lng: 131.044};
//         var marker = new google.maps.Marker({
//           position: uluru
//         });
//       });
//     });
//   });
// }

// private setCurrentPosition() {
//   if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       this.latitude = position.coords.latitude;
//       this.longitude = position.coords.longitude;
//       this.zoom = 12;
//     });
//   }
}

  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  } 

}
