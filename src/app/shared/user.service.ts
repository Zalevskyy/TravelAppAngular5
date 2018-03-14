import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:5860';
  constructor(private http: HttpClient) { }

   registerUser(user : User){
     const body: User = {
       Email: user.Email,
       Password: user.Password,
       ConfirmPassword: user.ConfirmPassword      
     };
      var reqHeader = new HttpHeaders({'No-Auth':'True'});
     return this.http.post(this.rootUrl + '/api/Account/Register', body, {headers:reqHeader});
   }

  userAuthentication(username,password): Observable<any> {
   console.log(11, username);
    var data = "UserName="+username+"&Password="+password+"&grant_type=password";
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded', 'No-Auth':'True'});
    return this.http.post(this.rootUrl+'/Token',data,{headers:reqHeader});
  }

}
