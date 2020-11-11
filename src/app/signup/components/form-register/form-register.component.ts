import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { IUser } from 'src/app/shared/models/user.model';
import { IUserResponse } from 'src/app/shared/models/userResponse.model';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  public formGroupRegister: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private userService: UserService,
              private router:Router ) {}

  ngOnInit(): void {
    this.formInit();
  }

  private formInit():void {
    this.formGroupRegister = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      identify: ['', [Validators.required]],
      email: ['@', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(16), this.validatePassword]]
    });
  }

  private validatePassword (control: AbstractControl){
    const password = control.value;
    let error = null;
    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!er.test(password)){
      error = { customError: 'Password debe tener una mayúscula, un número y minimo 16 caracteres'};
      }
    return error;
  }

  public getError (controlName: string): string {
    let error = '';
    const control = this.formGroupRegister.get(controlName);
    if (control.touched && control.errors != null) {
      error =  this.errorMapping(control.errors);
    }
    return error;
  }

  private errorMapping(errors: any){
    console.log('errors', errors);
    let errorMessage = '';
    if (errors.required) {
      errorMessage += 'Campo Obligatorio. ';
    }
    if (errors.customError){
      errorMessage += errors.customError;
    }
    if (errors.maxlength){
      errorMessage += `La longitud máxima debe ser ${errors.maxlength.requiredLength} `;
    }
    if (errors.email){
      errorMessage += 'Debes ingresar un correo válido';
    }
    return errorMessage;
  }

  public register():void{
    const dataUser: IUser = this.formGroupRegister.value;
    this.RegisterUser(dataUser);
    console.log('data register', dataUser);
        
  }

  private RegisterUser(user: IUser): void{
    this.userService.PostRegister(user).subscribe(response =>
      console.log('Registro Exitoso', response) );  
    };
  
  public login():void{
    this.router.navigate(['/signin']);
  }
  

}
