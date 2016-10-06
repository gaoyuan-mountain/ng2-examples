import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
