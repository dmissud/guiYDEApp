import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RefiFluxRoutingModule} from './refi-flux-routing.module';
import {RefiFluxComponent} from './refi-flux.component';


@NgModule({
  declarations: [RefiFluxComponent],
  imports: [
    CommonModule,
    RefiFluxRoutingModule
  ]
})
export class RefiFluxModule {
}
