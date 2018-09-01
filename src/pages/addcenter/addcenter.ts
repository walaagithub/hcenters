import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{locations} from '../../model/locations';
import{MyServiceProvider} from '../../providers/my-service/my-service';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the AddcenterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcenter',
  templateUrl: 'addcenter.html',
})
export class AddcenterPage {

  loc:locations={
name:'',
latitude:'',
longitude:''

  }

  constructor(public navCtrl: NavController, 
                 public navParams: NavParams,
                  public myserviceP:MyServiceProvider,
                  public alertCtrl: AlertController) {
  }

  addHcenter(loc:locations){
  
  if (this.loc.name!=""&&this.loc.latitude!=""&&this.loc.longitude!="") {

    this.myserviceP.addLocation(loc).then(ref=>{

      this.showAlert()
      
      this.loc.name=""
      this.loc.longitude=""
      this.loc.latitude=""
      
      })
    
  } else {
    this.showAlert2()
    
  }


  }




  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'رائع ',
      subTitle: 'شكرا للاضافة',
      buttons: ['OK']
    });
    alert.present();
  }


  showAlert2() {
    const alert = this.alertCtrl.create({
      title: 'عذرا',
      subTitle: 'املئ بيانات',
      buttons: ['OK']
    });
    alert.present();
  }

}
