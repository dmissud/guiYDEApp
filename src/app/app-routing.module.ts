import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainOrganizationComponent} from './organization/main-organization/main-organization.component';

const routes: Routes = [
  {path: '', redirectTo: 'organisation', pathMatch: 'full'},
  {path: 'organisation', component: MainOrganizationComponent},
  {path: 'refi', loadChildren: () => import('./refi-flux/refi-flux.module').then(m => m.RefiFluxModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
