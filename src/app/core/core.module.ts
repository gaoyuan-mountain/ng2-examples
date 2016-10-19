import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpService } from './http.service';
import { UserService, UserServiceConfig } from './user.service';
import { AuthGuard } from './auth-guard.service';
import { HeroService } from './hero.service';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ ],
  exports: [ ], //TO KNOW THE DETAIL
  providers: [ HttpService, UserService, AuthGuard, HeroService ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    //TO KNOW THE DETAIL
    if(parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: UserServiceConfig, useValue: config }
      ]
    }
  }
}
