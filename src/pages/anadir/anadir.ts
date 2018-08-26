import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnadirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anadir',
  templateUrl: 'anadir.html',
})
export class AnadirPage {

	

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	
  	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnadirPage');
  }

}
