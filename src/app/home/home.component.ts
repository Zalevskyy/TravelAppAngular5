import { Component, OnInit, ElementRef, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { } from '@types/googlemaps';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private router : Router,
  ) { }

  ngOnInit() {

}

  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  } 

}
