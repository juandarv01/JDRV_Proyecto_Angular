import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';


const routesB: Routes =[
  {
    path: '',
    component: BookingComponent,
    pathMatch: 'full'  
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routesB) ],
  exports: [RouterModule]
  
})
export class BookingRoutingModule { }
