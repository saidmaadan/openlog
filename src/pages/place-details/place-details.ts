import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-place-details',
  templateUrl: 'place-details.html',
})
export class PlaceDetailsPage {
  placeDetailsForm: FormGroup;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public fb: FormBuilder,
    public dataService: DataProvider
  ) {
    this.placeDetailsForm = fb.group({
      gateAccessCode: [''],
      ammenitiesCode: [''],
      wifiPassword: [''],
      phoneNumber: [''],
      departureDate: [''],
      notes: ['']
    });
  }

  ionViewDidLoad(){
    this.platform.ready().then(() => {
      this.dataService.getPlaceDetails().then((details) => {
        let savedDetails: any = false;
        if(details && typeof(details) != 'undefined'){
          savedDetails = JSON.parse(details);
        }
        let formControls: any = this.placeDetailsForm;
        if(savedDetails){
          formControls.getAccessCode.setValue(savedDetails.getAccessCode);
          formControls.ammenitiesCode.setValue(savedDetails.ammenitiesCode);
          formControls.wifiPassword.setValue(savedDetails.wifiPassword);
          formControls.departureDate.setValue(savedDetails.departureDate);
          formControls.notes.setValue(savedDetails.notes);
        }
      });
    });
  }


  saveForm(){
    let data = this.placeDetailsForm.value;
    this.dataService.setPlaceDetails(data)

  }

}
