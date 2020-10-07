import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainOrganizationComponent} from './common/view/main-organization/main-organization.component';

const routes: Routes = [
  {path: '', redirectTo: 'organisation', pathMatch: 'full'},
  {path: 'organisation', component: MainOrganizationComponent},
  {path: 'refi', loadChildren: () => import('./refi-flux/refi-flux.module').then(m => m.RefiFluxModule)},
  {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
