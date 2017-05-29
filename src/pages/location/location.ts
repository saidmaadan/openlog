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
    public alertCtrl: AlertController,
    public platform: Platform,
    public geolocation: Geolocation,
    public dataService: DataProvider,
    public maps: GoogleMapsProvider
  ) {
  }

  ionViewDidLoad() {
    this.maps.init(this.mapElement.nativeElement, this.pleaseConnect.nativeElement).then(() =>{
      //this.maps.changeMarker(this.latitude, this.longitude);
    });
  }
  setLocation(): void {

    this.geolocation.getCurrentPosition().then((position) => {

      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      this.maps.changeMarker(position.coords.latitude, position.coords.longitude);

      let data = {
        latitude: this.latitude,
        longitude: this.longitude
      };

      //this.dataService.setLocation(data);

      let alert = this.alertCtrl.create({
        title: 'Location set!',
        subTitle: 'You can now find your way back to your camp site from anywhere by clicking the button in the top right corner.',
        buttons: [{text: 'Ok'}]
      });

      alert.present();

    });

  }
  takeMeHome(): void {

    if(!this.latitude || !this.longitude){

      let alert = this.alertCtrl.create({
        title: 'Nowhere to go!',
        subTitle: 'You need to set your camp location first. For now, want to launch Maps to find your own way home?',
        buttons: ['Ok']
      });

      alert.present();
    }
    else {

      let destination = this.latitude + ',' + this.longitude;

      if(this.platform.is('ios')){
        window.open('maps://?q=' + destination, '_system');
      } else {
        let label = encodeURI('My Location');
        window.open('geo:0,0?q=' + destination + '(' + label + ')', '_system');
      }

    }

  }

}
