import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatoEmpleadoPage } from '../dato-empleado/dato-empleado';


/**
 * Generated class for the ContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contactos',
  templateUrl: 'contactos.html',
})
export class ContactosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToEmpleado(empleadoID){
  	this.navCtrl.push(DatoEmpleadoPage, {empleadoID : empleadoID});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactosPage');
  }

}
