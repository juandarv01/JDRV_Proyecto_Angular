import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule} from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { DetailModule } from './detail/detail.module';
import { RouterModule } from '@angular/router';
import { SignupModule } from './signup/signup.module';
import { SigninModule } from './signin/signin.module';
import { BookingModule } from './booking/booking.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptorsService } from './services/interceptor/auth-interceptors.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    DetailModule,
    RouterModule,
    SignupModule,
    SigninModule,
    BookingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorsService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
