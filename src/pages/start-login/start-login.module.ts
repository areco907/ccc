import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartLoginPage } from './start-login';

@NgModule({
  declarations: [
    StartLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(StartLoginPage),
  ],
})
export class StartLoginPageModule {}
