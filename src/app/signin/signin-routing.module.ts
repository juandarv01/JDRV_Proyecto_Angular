import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin.component';

const routesSI: Routes = [
  {
    path: '',
    component: SigninComponent,
    pathMatch: 'full'   
  }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(routesSI) ],
  exports: [RouterModule]
  
})
export class SigninRoutingModule { }
