import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../../../services/auth.service'

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  error: string
  user: User

  constructor(private AuthService: AuthService) {
    this.error = null
    this.user = {
      email: null,
      password: null
    }
  }

  ngOnInit() {
    this.AuthService.check()
  }

  login() {
    if(!this.AuthService.login(this.user)){
      this.error = "ERROR"
    }
  }

}
