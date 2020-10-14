import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainTreeApplicationsComponent} from './main/view/main-tree/main-tree-applications.component';

const routes: Routes = [
  {path: '', redirectTo: 'tree', pathMatch: 'full'},
  {path: 'tree', component: MainTreeApplicationsComponent},
  {path: 'refi', loadChildren: () => import('./refi-flux/refi-flux.module').then(m => m.RefiFluxModule)},
  {path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  {path: 'organization', loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
