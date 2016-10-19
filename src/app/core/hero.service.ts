import { Injectable, Optional } from '@angular/core';

import { HttpService } from './http.service';
import { Observable }     from 'rxjs/Observable';

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
