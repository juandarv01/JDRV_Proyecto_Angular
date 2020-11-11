import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninRoutingModule } from './signin-routing.module';



@NgModule({
  declarations: [SigninComponent, FormLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SigninRoutingModule

  ]
})
export class SigninModule { }
