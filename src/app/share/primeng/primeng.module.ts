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
    CardModule
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
    CardModule
  ]
})
export class PrimengModule {
}
