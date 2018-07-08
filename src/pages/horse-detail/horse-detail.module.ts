import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HorseDetailPage } from './horse-detail';

@NgModule({
  declarations: [
    HorseDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HorseDetailPage),
  ],
})
export class HorseDetailPageModule {}
