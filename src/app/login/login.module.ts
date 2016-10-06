import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login.component';
import { routing } from './login.routing';

@NgModule({
  imports: [ SharedModule, routing ],
  declarations: [ LoginComponent ],
  providers: []
})
export class LoginModule { } //TO KNOW THE DETAIL
