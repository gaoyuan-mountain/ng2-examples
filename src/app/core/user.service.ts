import { Injectable, Optional } from '@angular/core';

import { HttpService } from './http.service';
import { Observable }     from 'rxjs/Observable';

export class User {
  id: number;
  username: string;
  password: string;
}

export class UserServiceConfig {
  username: ''
}

@Injectable()
export class UserService {
  private _username = '';

  constructor(@Optional() config: UserServiceConfig, private httpService: HttpService) {
    if(config) {
      this._username = config.username;
    }
  }

  get username() {
    return this._username;
  }

  login(username: string, password: string): Observable<User> {
    let data = JSON.stringify({
      username,
      password
    });

    return this.httpService.post<User>('/user/login', data);
  }
}
