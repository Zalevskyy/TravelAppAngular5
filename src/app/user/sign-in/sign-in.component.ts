import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm){
    console.log(form.value.UserName);
    console.log(form.value.Password);
    this.userService.userAuthentication(form.value.UserName,form.value.Password).subscribe((data:any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/home']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
      console.log(err);
    } );
  }
}
