import { DetailComponent } from './detail/detail.component';
import { Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Page404Component } from './error-Page/components/page404/page404.component';
import { OnlyLoggedInUsersGuard } from './shared/guards/only-logged-in-users.guard';


export const routes: Routes = [
    
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'  
      },
    {
       path: 'home',
       loadChildren:() => import('./home/home.module').then(mod => mod.HomeModule)
    },
    {
        path: 'detail/:id',
        loadChildren:() => import('./detail/detail.module').then(mod => mod.DetailModule)
    },
    {
        path: 'booking/:id',
        loadChildren:() => import('./booking/booking.module').then(mod => mod.BookingModule),
        canActivate:[OnlyLoggedInUsersGuard]
    },
    {
        path: 'signin',
        loadChildren:() => import('./signin/signin.module').then(mod => mod.SigninModule)
    },
    {
        path: 'signup',
        loadChildren:() => import('./signup/signup.module').then(mod => mod.SignupModule)
    },
    {
        path: '404',
       component: Page404Component
    },
    {
        path: '**',
        redirectTo: '/404'
    }
  ];
  