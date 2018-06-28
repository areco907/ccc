import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/**
 * Modules
 */
import { LoginPageModule } from '../pages/login/login.module';

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
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AdapterManagerService,
    UtilitiesProvider,
    JsonProvider,
    SessionProvider,
    HomeServiceProvider
  ]
})
export class AppModule {}
