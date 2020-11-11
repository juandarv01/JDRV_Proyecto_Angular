import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user.model';
import { IUserResponse } from 'src/app/shared/models/userResponse.model';
import { environment} from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlApiU: string = environment.urlBase;
 
  constructor(private httpClientP: HttpClient) { }

  private isLogged: boolean = false;
  
  public isLoggedUser(): boolean {
    this.isLogged = localStorage.getItem('token') ? true : false;
    return this.isLogged;
  }

  private handlerError(error: HttpErrorResponse){
    console.error('Http error', error);
    return throwError(`Error calling api ${error.message}`)
  };

  public PostRegister(userData:IUser): Observable<IUserResponse> {
    const url = `${this.urlApiU}/users/signup`;
    return this.httpClientP.post<IUserResponse>(url,userData).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

   public PostLogin(userDat: IUser): Observable<IUserResponse> {
     const url = `${this.urlApiU}/users/login`;
     return this.httpClientP.post<IUserResponse>(url,userDat).pipe(
       retry(2), catchError(this.handlerError)
     );
   }
      
}


