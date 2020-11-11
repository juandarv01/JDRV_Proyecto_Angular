import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IBooking } from 'src/app/shared/models/booking.model';
import { IBookingResponse } from 'src/app/shared/models/bookingResponse.models';
import { IUser } from 'src/app/shared/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private urlApiU: string = environment.urlBase;
  constructor(private httpClientP: HttpClient) { }

  private handlerError(error: HttpErrorResponse){
    console.error('Http error', error);
    return throwError(`Error calling api ${error.message}`)
  };

  public postBooking(userData:IBooking): Observable<IBookingResponse> {
    const url = `${this.urlApiU}/booking`;
    return this.httpClientP.post<IBookingResponse>(url,userData).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

}
