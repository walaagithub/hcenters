import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HcentermapPage } from '../hcentermap/hcentermap';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  searchQuery: string = '';
  items: string[];

  constructor(private navCtrl:NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'مركز صحي واسط',
      'مركز صحي الجامعة',
      'مركز صحي عرفة'
    
    ];
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
