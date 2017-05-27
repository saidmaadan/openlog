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
  placeDetailsForm: FormGroup;

  constructor(
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


  saveForm(){
    let data = this.placeDetailsForm.value;
    //this.dataService.setPlaceDetails(data)

  }

}
