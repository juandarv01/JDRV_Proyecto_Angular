import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';
import { IUser } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public formGroupLogin: FormGroup;
  public localStorage:string = '';

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router:Router) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit():void {
    this.formGroupLogin = this.formBuilder.group({
      email: ['@', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });

  }

  public login():void{
    const datalogin:IUser = this.formGroupLogin.value;
    this.userService.PostLogin(datalogin).subscribe(response =>{
    console.log('Login Ok', response);
    this.router.navigateByUrl('/home');
    // this.LoginUser(datalogin);
    // console.log('data login', datalogin);

    if(response.status === 1){
      localStorage.setItem('token', response.token);
      this.router.navigate(['/home']);
    }
    });
    console.log('data login', datalogin);
  }

  public register():void{
    this.router.navigate(['/signup']);
  }

  
  // private LoginUser(login: IUser):void{
  //   this.userService.PostLogin(login).subscribe(response =>
  //     console.log('Login Ok', response)
      
  //     );
  // }
}

