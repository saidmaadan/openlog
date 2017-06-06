import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Quicknote } from './quicknote';

@NgModule({
  declarations: [
    Quicknote,
  ],
  imports: [
    IonicPageModule.forChild(Quicknote),
  ],
  exports: [
    Quicknote
  ]
})
export class QuicknoteModule {}
