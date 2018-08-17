import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { AppRate } from '@ionic-native/app-rate';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {


public part1:boolean = false;
public part2:boolean = false;
public part3:boolean = false;




  constructor(public navCtrl: NavController ,private appRate: AppRate ) {
  }

public isToggled: boolean=true;
YES1()
  {
    console.log("Toggled: "+ this.isToggled);
    if(this.isToggled == true)
    {
      console.log('true');
      window.open("https://play.google.com/store/apps/details?id=com.c4k.emnumbers", '_system', 'location=yes');
    }
    else
    {
      console.log('false');
    }
  }
}



