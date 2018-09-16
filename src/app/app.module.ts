import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import{AddcenterPage} from '../pages/addcenter/addcenter';
import { TabsPage } from '../pages/tabs/tabs';
import { HcentermapPage } from './../pages/hcentermap/hcentermap';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppRate } from '@ionic-native/app-rate';

// Angularfire2 firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './Credentails';
import { MyServiceProvider } from '../providers/my-service/my-service';
import { AngularFireAuthModule,AngularFireAuth } from 'angularfire2/auth';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HcentermapPage,
    AddcenterPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    HcentermapPage,
    AddcenterPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MyServiceProvider,
    AppRate,

  
  ]
})
export class AppModule {}
