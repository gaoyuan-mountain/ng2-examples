import { Injectable, Optional } from '@angular/core';

import { HttpService } from './http.service';
<<<<<<< HEAD
import { Observable } from 'rxjs/Observable';
=======
import { Observable }     from 'rxjs/Observable';
>>>>>>> 5c97841573d0c9b6e7b1adebd81fc2318f37f209

export class Hero {
  id: number;
  name: string;
}

@Injectable()
export class HeroService {
  constructor(private httpService: HttpService) { }

  getHeroes(): Observable<Hero[]> {
    return this.httpService.get<Hero[]>('/hero/list');
  }
}
