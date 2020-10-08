import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RefiFluxRoutingModule} from '../refi-flux/refi-flux-routing.module';
import { ApplicationComponent } from './view/application/application/application.component';



@NgModule({
  declarations: [ApplicationComponent],
  imports: [
    CommonModule,
    RefiFluxRoutingModule
  ]
})
export class ApplicationModule { }
