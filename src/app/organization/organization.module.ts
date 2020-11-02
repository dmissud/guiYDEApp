import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrganizationRoutingModule} from './organization-routing.module';
import {OrganizationComponent} from './view/main/organization.component';
import { UploadOrganizationTreeComponent } from './view/upload-organization-tree/upload-organization-tree.component';
import {PrimengModule} from '../share/primeng/primeng.module';
import { ListOrganizationComponent } from './view/list-organization/list-organization.component';


@NgModule({
  declarations: [OrganizationComponent, UploadOrganizationTreeComponent, ListOrganizationComponent],
  imports: [
    CommonModule,
    PrimengModule,
    OrganizationRoutingModule
  ]
})
export class OrganizationModule {
}
