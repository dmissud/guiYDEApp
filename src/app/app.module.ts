import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {TreeApplicationsViewComponent} from './main/view/tree-applications-view/tree-applications-view.component';
import {PrimengModule} from './share/primeng/primeng.module';
import {TopbarComponent} from './main/view/topbar/topbar.component';
import {UtilsViewComponent} from './main/view/utility-view/utils-view.component';
import {MainTreeApplicationsComponent} from './main/view/main-tree/main-tree-applications.component';
import {AppRoutingModule} from './app-routing.module';
import {RefiFluxModule} from './refi-flux/refi-flux.module';
import {LoginComponent} from './main/view/login/login.component';
import {LoadingInterceptor} from './main/service/loading.interceptor';
import {TokenInterceptor} from './main/service/token.interceptor';
import {UsersModule} from './users/users.module';
import {NotificationComponent} from './main/view/notification/notification.component';
import {LoggingInterceptor} from './main/service/logging.interceptor';


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
  declarations: [AppComponent,
    TreeApplicationsViewComponent,
    TopbarComponent,
    UtilsViewComponent,
    MainTreeApplicationsComponent,
    LoginComponent,
    NotificationComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ]
})

export class AppModule {
}

