import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking/booking.service';
import { IBooking } from 'src/app/shared/models/booking.model';
import { IBookingResponse } from 'src/app/shared/models/bookingResponse.models';

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss']
})
export class FormBookingComponent implements OnInit {

  public formGroupBooking: FormGroup;
  private reserva: IBooking;
  @Input() experienceId: string;
  public mensaje:String; 

  constructor(private formBuilder: FormBuilder,
              private bookingService: BookingService,
              private router: Router) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit():void{
      this.formGroupBooking = this.formBuilder.group({
      fechaIni: ['', [Validators.required]], // this.validateDateIni
      fechaFin: ['', [Validators.required]],
      comentarios: ['', [Validators.required, Validators.maxLength(300)]]
    },{
      validators: this.valideDateRange()
    });
  }

  // private validateDateIni (control: AbstractControl){
  //   const fechaIni = control.value;
  //   let error = null;
  //   let fechaActual = new Date();
  //   if (fechaActual < fechaIni){
  //     error = { customError: 'Fecha inicial debe ser mayor o igual a la fecha Actual'};
  //     }
  //   return error;
  // }


  private valideDateRange(){
    return (formGroup: FormGroup) =>{
      const controlBookingDateStart = formGroup.controls['fechaIni']
      const controlBookingDateEnd = formGroup.controls['fechaFin']
      if (new Date(controlBookingDateStart.value) > new Date(controlBookingDateEnd.value)){
        controlBookingDateEnd.setErrors({ mustGreaterThat: true})
      }
    }
  }

public reservar(): void {
  
  this.reserva = this.formGroupBooking.value;
  this. reserva.experience_id = this.experienceId;
  console.log('Request' + this.reserva);
  this.bookingService.postBooking(this.reserva).subscribe( response => {
    if (response.status === 1 ) {
      console.log('Respuesta', response);
      this.mensaje = 'Reserva exitosa';
    } else {
      this.mensaje = 'Reserva no realizada';
    }
  })

}

public home():void{
  this.router.navigate(['/home']);
}

public getError(controlName: string){
  let error = '';
  const control = this.formGroupBooking.get(controlName);
 if (control.touched && control.errors != null){
    error = this.errorMapping(control.errors)
  }
  return error;
}

private errorMapping(errors: any){
  console.log('errores',errors)
  let errorMesage = '';
  if (errors.required){
    errorMesage += 'Campo requerido';
  }
  if(errors.mustGreaterThat){
    errorMesage += 'Fecha final debe ser mayor o igual a la fecha Inicial'
  }
return errorMesage;
}

  public booking():void{
    const databooking = this.formGroupBooking.value;
    console.log('data booking', databooking);
  }
}
