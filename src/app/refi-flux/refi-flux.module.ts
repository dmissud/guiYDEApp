import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RefiFluxRoutingModule} from './refi-flux-routing.module';
import {RefiFluxComponent} from './view/refi-flux/refi-flux.component';
import {PrimengModule} from '../share/primeng/primeng.module';
import { UploadFluxComponent } from './view/upload-flux/upload-flux.component';
import { ListFluxRefiComponent } from './view/list-flux-refi/list-flux-refi.component';
import { FluxDetailComponent } from './view/flux-detail/flux-detail.component';


@NgModule({
  declarations: [RefiFluxComponent, UploadFluxComponent, ListFluxRefiComponent, FluxDetailComponent],
  imports: [
    CommonModule,
    RefiFluxRoutingModule,
    PrimengModule
  ]
})
export class RefiFluxModule {
}
