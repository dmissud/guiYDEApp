import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {NodeService} from './service/node.service';
import {OrganizationViewComponent} from './organization/organization-view/organization-view.component';
import {PrimengModule} from './share/primeng/primeng.module';
import {TopbarComponent} from './struture/topbar/topbar.component';
import {UtilsViewComponent} from './struture/utility-view/utils-view.component';
import {MainOrganizationComponent} from './organization/main-organization/main-organization.component';
import {AppRoutingModule} from './app-routing.module';
import {RefiFluxModule} from './refi-flux/refi-flux.module';
import {LoginComponent} from './struture/login/login.component';
import {LoadingInterceptor} from './service/loading.interceptor';
import {TokenInterceptor} from './service/token.interceptor';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    PrimengModule,
    AppRoutingModule,
    RefiFluxModule
  ],
  declarations: [AppComponent, OrganizationViewComponent, TopbarComponent, UtilsViewComponent, MainOrganizationComponent, LoginComponent
  ],
  bootstrap: [AppComponent],
  providers: [NodeService,
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ]
})

export class AppModule {
}

