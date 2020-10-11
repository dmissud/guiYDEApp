import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RefiFluxRoutingModule} from './refi-flux-routing.module';
import {RefiFluxComponent} from './refi-flux.component';
import {PrimengModule} from '../share/primeng/primeng.module';


@NgModule({
  declarations: [RefiFluxComponent],
  imports: [
    CommonModule,
    RefiFluxRoutingModule,
    PrimengModule
  ]
})
export class RefiFluxModule {
}
