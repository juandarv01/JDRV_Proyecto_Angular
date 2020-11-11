import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { IUserResponse } from '../shared/models/userResponse.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public : IUserResponse;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
