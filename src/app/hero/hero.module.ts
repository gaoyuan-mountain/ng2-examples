import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './hero.component';

import { routing } from './hero.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    HeroComponent
  ]
})
export class HeroModule {}
