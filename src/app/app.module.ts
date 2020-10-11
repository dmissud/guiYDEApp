import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {TreeApplicationsViewComponent} from './common/view/tree-applications-view/tree-applications-view.component';
import {PrimengModule} from './share/primeng/primeng.module';
import {TopbarComponent} from './common/view/topbar/topbar.component';
import {UtilsViewComponent} from './common/view/utility-view/utils-view.component';
import {MainTreeApplicationsComponent} from './common/view/main-tree/main-tree-applications.component';
import {AppRoutingModule} from './app-routing.module';
import {RefiFluxModule} from './refi-flux/refi-flux.module';
import {LoginComponent} from './common/view/login/login.component';
import {LoadingInterceptor} from './common/service/loading.interceptor';
import {TokenInterceptor} from './common/service/token.interceptor';
import {UsersModule} from './users/users.module';
import {NotificationComponent} from './common/view/notification/notification.component';


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
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
  ]
})

export class AppModule {
}

