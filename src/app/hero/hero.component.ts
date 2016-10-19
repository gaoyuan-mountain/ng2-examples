import { Component, OnInit } from '@angular/core';

import { Hero, HeroService } from '../core/hero.service';

@Component({
  selector: 'hero',
  templateUrl: 'hero.html',
  styles: [
    require('./hero.scss')
  ]
})
export class HeroComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(
      (response) => {
        this.heroes = response;
      },
      (error) => {

      }
    )
  }
<<<<<<< HEAD

  getHeroAvantar(hero: any): string {
    return require(`../../public/images/heroes/${ hero.name }.png`);
  }
=======
>>>>>>> 5c97841573d0c9b6e7b1adebd81fc2318f37f209
}
