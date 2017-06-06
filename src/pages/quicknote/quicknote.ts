import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';


@IonicPage()
@Component({
  selector: 'page-quicknote',
  templateUrl: 'quicknote.html',
})
export class Quicknote {
  quicknote: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.quicknote = this.navParams.get('quicknote');
  }

  addItem():void{
    let prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Enter the name of the task for this note",
      inputs:[
        {
          name: 'name'
        }
      ],
      buttons:[
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data =>{
            this.quicknote.addItem(data.name);
          }
        }
      ]
    });
    prompt.present();
  }

  renameItem(item):void{
    let prompt = this.alertCtrl.create({
      title: 'Rename Item',
      message: "Enter the new name of the task for this note",
      inputs:[
        {
          name: 'name'
        }
      ],
      buttons:[
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: data =>{
            this.quicknote.renameItem(item, data.name);
          }
        }
      ]
    });
    prompt.present();
  }

  removeItem(item): void{
    this.quicknote.removeItem(item);
  }

  toggleItem(item): void{
    this.quicknote.toggleItem(item);
  }

  uncheckItem(): void{
    this.quicknote.items.forEach((item) =>{
      if(item.checked){
        this.quicknote.toggleItem(item);
      }
    });
  }

}
