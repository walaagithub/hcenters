import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HcentermapPage } from '../hcentermap/hcentermap';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  itemList : AngularFireList<any>;
  searchQuery: string = '';
  items=[];

  constructor(private navCtrl:NavController , public db:AngularFireDatabase) {

    // Database
    this.itemList = db.list('centerLoc');

    this.itemList.snapshotChanges().subscribe( actions => {
        actions.forEach( action =>{
        let y = action.payload.toJSON();
        this.items.push(y['name']);
        });
    });
    
    this.initializeItems();

  }

  initializeItems() {

  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  GotoHcentermap( Item:string )
  {
      this.navCtrl.push( HcentermapPage , { Item:Item });
  }


}