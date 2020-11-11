import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
 
const routesH: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  }
];
 
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routesH)],
  exports: [RouterModule],
})
export class HomeRoutingModule { }