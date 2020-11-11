import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { IUser } from '../shared/models/user.model';
import { IUserResponse } from '../shared/models/userResponse.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public : IUserResponse;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
    }

  }
