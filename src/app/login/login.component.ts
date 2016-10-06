import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../core/user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.html',
  styles: [
    require('./login.scss')
  ]
})
export class LoginComponent {
  constructor(private userService: UserService, private router: Router) { }

  login(username: string, password: string) {
    this.userService.login(username, password)
      .subscribe(
        (res) => {
          if(res.username) {
            this.router.navigate(['hero']);
          }
        },
        (error) => {
          console.log('login failed');
        }
      )
  }
}
