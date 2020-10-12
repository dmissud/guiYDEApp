import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './view/users/users.component';
import {UsersRoutingModule} from './users-routing.module';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputSwitchModule} from 'primeng/inputswitch';
import {UserService} from './service/users.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ToolbarModule,
    ToastModule,
    TableModule,
    ConfirmDialogModule,
    InputSwitchModule,
    FormsModule,
    InputTextModule,
    RippleModule,
    DialogModule
  ],
  providers: [UserService, MessageService, ConfirmationService]
})
export class UsersModule { }
