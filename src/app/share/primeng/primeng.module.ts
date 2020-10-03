import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TieredMenuModule} from 'primeng/tieredmenu';
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

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RippleModule,
    ButtonModule,
    TieredMenuModule,
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
    InputSwitchModule
  ],
  exports: [
    RippleModule,
    ButtonModule,
    TieredMenuModule,
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
    InputSwitchModule
  ]
})
export class PrimengModule {
}
