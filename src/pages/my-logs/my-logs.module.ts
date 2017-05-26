import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyLogsPage } from './my-logs';

@NgModule({
  declarations: [
    MyLogsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyLogsPage),
  ],
  exports: [
    MyLogsPage
  ]
})
export class MyLogsPageModule {}
