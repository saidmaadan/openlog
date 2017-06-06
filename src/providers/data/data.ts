import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {
  }

  getData(): Promise<any>{
    return this.storage.get('quicknotes');
  }

  save(data): void{
    let saveData = [];
    data.forEach((quicknote)=>{
      saveData.push({
        title: quicknote.title,
        items: quicknote.items
      });
    });

    let newData = JSON.stringify(saveData);
    this.storage.set('quicknotes', newData);
  }

  setMyLogs(data: object): void{
    let newData = JSON.stringify(data);
    this.storage.set('mylogs', newData);
  }

  setPlaceDetails(data: object): void{
    let newData = JSON.stringify(data);
    this.storage.set('placeDetails', newData);
  }

  setLocation(data: object): void{
    let newData = JSON.stringify(data);
    this.storage.set('location', newData);
  }

  getMyLogs(): Promise<any>{
    return this.storage.get('myLogs');
  }

  getPlaceDetails(): Promise<any>{
    return this.storage.get('placeDetails');
  }

  getLocation(): Promise<any>{
    return this.storage.get('location');
  }

}
