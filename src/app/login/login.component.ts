import { Component } from '@angular/core';

import { UserService } from '../core/user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.html',
  styles: [
    require('./login.scss')
  ]
})
export class LoginComponent {
  constructor(private userService: UserService) { }

  login(username: string, password: string) {
    this.userService.login(username, password)
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {

        }
      )
  }
}
