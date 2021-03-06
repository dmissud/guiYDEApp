import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RefiFluxComponent} from './view/refi-flux/refi-flux.component';

const routes: Routes = [{path: '', component: RefiFluxComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefiFluxRoutingModule {
}
