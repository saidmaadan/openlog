import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-place-details',
  templateUrl: 'place-details.html',
})
export class PlaceDetailsPage {

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,
    public dataService: DataProvider
  ) {
  }

  saveForm(){
    
  }

}
