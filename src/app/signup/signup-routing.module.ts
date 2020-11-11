import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup.component';

const routesSU: Routes = [
  {
    path: '',
    component: SignupComponent,
    pathMatch: 'full'   
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routesSU) ],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
