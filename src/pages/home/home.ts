import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1: any = "LocationPage";
  tab2: any = "MyLogsPage";
  tab3: any = "PlaceDetailsPage";
  tab4: any = "QuickNotesHomePage";
  
  constructor(public navCtrl: NavController) {

  }

}
