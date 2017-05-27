import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-my-logs',
  templateUrl: 'my-logs.html',
})
export class MyLogsPage {

  constructor(
    public navCtrl: NavController,
    public fb: FormBuilder,
    public dataService: DataProvider
  ) {
  }

  saveForm() {
    
  }

}
