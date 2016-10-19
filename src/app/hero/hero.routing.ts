import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../core/auth-guard.service';
import { HeroComponent } from './hero.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'hero', component: HeroComponent, canActivate: [ AuthGuard ] }
]);
