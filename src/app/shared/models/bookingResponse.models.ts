import { IBooking } from './booking.model';

export interface IBookingResponse {
    status: number,
    response: IBooking
}