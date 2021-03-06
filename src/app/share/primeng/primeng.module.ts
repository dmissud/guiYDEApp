import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {TreeModule} from 'primeng/tree';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {ContextMenuModule} from 'primeng/contextmenu';
import {SidebarModule} from 'primeng/sidebar';
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {PanelMenuModule} from 'primeng/panelmenu';
import {InputSwitchModule} from 'primeng/inputswitch';
import {PasswordModule} from 'primeng/password';
import {SlideMenuModule} from 'primeng/slidemenu';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmationService, MessageService} from 'primeng/api';
import {FileUploadModule} from 'primeng/fileupload';
import {TooltipModule} from 'primeng/tooltip';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ScrollPanelModule} from 'primeng/scrollpanel';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RippleModule,
    ButtonModule,
    MenubarModule,
    TreeModule,
    ToastModule,
    ButtonModule,
    DialogModule,
    ContextMenuModule,
    MenuModule,
    SidebarModule,
    ToolbarModule,
    SplitButtonModule,
    PanelMenuModule,
    InputSwitchModule,
    PasswordModule,
    InputTextModule,
    SlideMenuModule,
    TabViewModule,
    TableModule,
    CardModule,
    TableModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    FileUploadModule,
    TooltipModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    ScrollPanelModule
  ],
  exports: [
    RippleModule,
    ButtonModule,
    MenubarModule,
    TreeModule,
    ToastModule,
    ButtonModule,
    DialogModule,
    ContextMenuModule,
    MenuModule,
    SidebarModule,
    ToolbarModule,
    SplitButtonModule,
    PanelMenuModule,
    InputSwitchModule,
    PasswordModule,
    InputTextModule,
    SlideMenuModule,
    TabViewModule,
    TableModule,
    CardModule,
    TableModule,
    DropdownModule,
    MessagesModule,
    MessageModule,
    FileUploadModule,
    TooltipModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    ScrollPanelModule
  ],
  providers: [MessageService, ConfirmationService]
})
export class PrimengModule {
}
