import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController,Platform } from 'ionic-angular';
import { QuicknoteModel } from '../../models/quicknote-model';
import { DataProvider } from '../../providers/data/data';
import { Keyboard } from '@ionic-native/keyboard';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-quicknoteshome',
  templateUrl: 'quicknoteshome.html'
})
export class QuickNotesHomePage {

  quicknotes: QuicknoteModel[] = [];

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public dataService: DataProvider,
    public platform: Platform,
    public storage: Storage,
    public keyboard: Keyboard
  ) {

  }
  ionViewDidLoad(){
    this.platform.ready().then(() =>{
      this.storage.get('introShown').then((result) => {
        if(!result){
          this.storage.set('introShown', true);
          this.navCtrl.setRoot('Intro');
        }
      });
      this.dataService.getData().then((quicknotes) => {
        let saveQuicknotes: any = false;
        if(typeof(quicknotes) != "undefined"){
          saveQuicknotes = JSON.parse(quicknotes);
        }
        if(saveQuicknotes){
          saveQuicknotes.forEach((saveQuicknote) =>{
            let loadQuicknote = new QuicknoteModel(saveQuicknote.title, saveQuicknote.items);
            this.quicknotes.push(loadQuicknote);
            loadQuicknote.quicknoteUpdates().subscribe(update =>{
              this.save();
            });
          });
        }
      });
    });
  }

  addQuicknote(): void{
    let prompt = this.alertCtrl.create({
      title: 'New Quicknote',
      message: 'Enter the title of your new note',
        inputs:[
          {
            name:'name'
          }
        ],
        buttons:[
          {
            text: 'Cancel'
          },
          {
            text: 'Save',
            handler: data => {
            let newQuicknote = new QuicknoteModel(data.name, []);
            this.quicknotes.push(newQuicknote);
            newQuicknote.quicknoteUpdates().subscribe(update => {
              this.save();
            });
            this.save();
          }
        }
      ]
    });
    prompt.present();
  }

  renameQuicknote(quicknote): void{
    let prompt = this.alertCtrl.create({
      title: 'Rename Note',
      message: 'Enter new name for your note',
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
            let index = this.quicknotes.indexOf(quicknote);
            if(index > -1){
              this.quicknotes[index].setTitle(data.name);
              this.save();
            }
          }
        }
      ]

    });
    prompt.present();
  }

  viewQuicknote(quicknote): void{
    this.navCtrl.push('Quicknote', {
      quicknote: quicknote
    })
  }

  removeQuicknote(quicknote): void{
    let index = this.quicknotes.indexOf(quicknote);
    if(index > -1){
      this.quicknotes.splice(index, 1);
      this.save();
    }
  }

  save(): void{
    this.keyboard.close();
    this.dataService.save(this.quicknotes);
  }

}
