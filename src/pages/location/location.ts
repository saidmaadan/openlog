import { Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, Platform, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { DataProvider } from '../../providers/data/data';
import { GoogleMapsProvider } from '../../providers/google-maps/google-maps';


@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('pleaseConnect') pleaseConnect: ElementRef;

  latitude: number;
  longitude: number;

  constructor(
    public navCtrl: NavController,
    public alertParams: AlertController,
    public platform: Platform,
    public geolocation: Geolocation,
    public dataService: DataProvider,
    public maps: GoogleMapsProvider
  ) {
  }

  ionViewDidLoad() {

  }
  setLocation(){

  }
  takeHome(){
    
  }

}
