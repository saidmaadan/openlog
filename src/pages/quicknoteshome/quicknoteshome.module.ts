import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuickNotesHomePage } from './quicknoteshome';

@NgModule({
  declarations: [
    QuickNotesHomePage,
  ],
  imports: [
    IonicPageModule.forChild(QuickNotesHomePage),
  ],
  exports: [
    QuickNotesHomePage
  ]
})
export class QuickNotesHomePageModule {}
