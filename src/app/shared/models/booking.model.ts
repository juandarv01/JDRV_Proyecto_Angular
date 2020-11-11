export interface IBooking {
    _id?: string,
    fechaIni: Date,
    fechaFin: Date,
    experience_id: string,
    comentarios: string,
    user_id?: string,
    __v?: number
}