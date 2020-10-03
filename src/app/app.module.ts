import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {NodeService} from './service/node.service';
import {OrganizationViewComponent} from './organization-view/organization-view.component';
import {PrimengModule} from './share/primeng/primeng.module';
import {TopbarComponent} from './topbar/topbar.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    PrimengModule
  ],
  declarations: [AppComponent, OrganizationViewComponent, TopbarComponent
  ],
  bootstrap: [AppComponent],
  providers: [NodeService]
})

export class AppModule {
}

