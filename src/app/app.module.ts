import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { AppVersion } from '@ionic-native/app-version';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Modules
 */
import { LoginPageModule } from '../pages/login/login.module';
import { StartLoginPageModule } from "../pages/start-login/start-login.module";
import { ForgotPasswordPageModule } from "../pages/forgot-password/forgot-password.module";
import { HorseDetailPageModule } from "../pages/horse-detail/horse-detail.module";
/**
 * Components
 */
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ModalsPageModule } from '../pages/modals/modals.module';
import { HomePageModule } from '../pages/home/home.module';
import { ComponentsModule } from '../components/components.module';

/**
 * Services y/o providers
 */
import { AdapterManagerService } from '../bussines-model/services/adapter-manager-service';
import { UtilitiesProvider } from '../commons/providers/utilities.provider';
import { JsonProvider } from '../commons/providers/json.provider';
import { SessionProvider } from '../commons/providers/session.provider';
import { HomeServiceProvider } from '../providers/home-service/home-service';
import { LoginServiceProvider } from '../providers/login-service/login-service';


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    ModalsPageModule,
    HomePageModule,
    ComponentsModule,
    ForgotPasswordPageModule,
    HorseDetailPageModule,
    StartLoginPageModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AdapterManagerService,
    UtilitiesProvider,
    JsonProvider,
    SessionProvider,
    HomeServiceProvider,
    LoginServiceProvider
  ]
})
export class AppModule {}
