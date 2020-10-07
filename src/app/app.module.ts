import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {OrganizationService} from './common/service/organization.service';
import {OrganizationViewComponent} from './common/view/organization-view/organization-view.component';
import {PrimengModule} from './share/primeng/primeng.module';
import {TopbarComponent} from './common/view/topbar/topbar.component';
import {UtilsViewComponent} from './common/view/utility-view/utils-view.component';
import {MainOrganizationComponent} from './common/view/main-organization/main-organization.component';
import {AppRoutingModule} from './app-routing.module';
import {RefiFluxModule} from './refi-flux/refi-flux.module';
import {LoginComponent} from './common/view/login/login.component';
import {LoadingInterceptor} from './common/service/loading.interceptor';
import {TokenInterceptor} from './common/service/token.interceptor';
import {UsersModule} from './users/users.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    PrimengModule,
    RefiFluxModule,
    UsersModule
  ],
  declarations: [AppComponent, OrganizationViewComponent, TopbarComponent, UtilsViewComponent, MainOrganizationComponent, LoginComponent
  ],
  bootstrap: [AppComponent],
  providers: [OrganizationService,
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ]
})

export class AppModule {
}

