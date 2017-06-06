import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-my-logs',
  templateUrl: 'my-logs.html',
})
export class MyLogsPage {
  myLogsForm: FormGroup;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public fb: FormBuilder,
    public dataService: DataProvider
  ) {
    this.myLogsForm = fb.group({
      carRegistration: [''],
      trailerRegistration: [''],
      trailerDimensions: [''],
      phoneNumber: [''],
      notes: ['']
    });
  }

  ionViewDidLoad() {

    this.platform.ready().then(() => {

      this.dataService.getMyLogs().then((details) => {

        let savedDetails: any = false;

        if(details && typeof(details) != "undefined"){
          savedDetails = JSON.parse(details);
        }

        let formControls: any = this.myLogsForm.controls;

        if(savedDetails){
          formControls.carRegistration.setValue(savedDetails.carRegistration);
          formControls.trailerRegistration.setValue(savedDetails.trailerRegistration);
          formControls.trailerDimensions.setValue(savedDetails.trailerDimensions);
          formControls.phoneNumber.setValue(savedDetails.phoneNumber);
          formControls.notes.setValue(savedDetails.notes);
        }

      });

    });

  }

  saveForm(): void {
    let data = this.myLogsForm.value;
    this.dataService.setMyLogs(data);
  }

}
