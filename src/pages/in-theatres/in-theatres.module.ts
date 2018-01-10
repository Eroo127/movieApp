import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InTheatresPage } from './in-theatres';

@NgModule({
  declarations: [
    InTheatresPage,
  ],
  imports: [
    IonicPageModule.forChild(InTheatresPage),
  ],
})
export class InTheatresPageModule {}
