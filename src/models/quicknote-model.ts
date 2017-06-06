import { Observable } from 'rxjs/Observable';

export class QuicknoteModel{
  quicknote: any;
  quicknoteObserver: any;

  constructor(public title: string, public items: any[]){
    this.items = items;
    this.quicknote = Observable.create(observer => {
      this.quicknoteObserver = observer;
    });
  }

  addItem(item): void{
    this.items.push({
      title: item,
      checked: false
    });
    this.quicknoteObserver.next(true);
  }

  removeItem(item):void{
    let index = this.items.indexOf(item);

    if(index > -1){
      this.items.splice(index, 1)
    }
    this.quicknoteObserver.next(true);
  }

  renameItem(item, title): void{
    let index = this.items.indexOf(item);

    if (index > -1){
      this.items[index].title = title
    }
    this.quicknoteObserver.next(true);
  }

  setTitle(title): void{
    this.title = title;
    this.quicknoteObserver.next(true);
  }

  toggleItem(item): void{
    item.checked = !item.checked;
    this.quicknoteObserver.next(true);
  }

  quicknoteUpdates(): Observable<any>{
    return this.quicknote;
  }
}
