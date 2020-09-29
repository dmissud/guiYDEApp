import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from './app.component';
import {NodeService} from './service/node.service';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {OrganizationViewComponent} from './organization-view/organization-view.component';
import {TreeModule} from 'primeng/tree';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {ContextMenuModule} from 'primeng/contextmenu';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    RippleModule,
    ButtonModule,
    TieredMenuModule,
    BrowserModule,
    BrowserAnimationsModule,
    TreeModule,
    ToastModule,
    ButtonModule,
    DialogModule,
    ContextMenuModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [AppComponent, OrganizationViewComponent
  ],
  bootstrap: [AppComponent],
  providers: [NodeService]
})

export class AppModule {
}

