import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { AgmCoreModule } from '@agm/core';
import {Http, HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { appRoutes } from './routes';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { GoogleMapAgmComponent } from './home/google-map-agm/google-map-agm.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    GoogleMapAgmComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyApnP0kN8WDuIx9saSriQA_O5FTN_ftA_A",
      libraries: ["places"]
    }),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, Http, AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
