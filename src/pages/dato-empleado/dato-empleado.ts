import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactosPage } from '../contactos/contactos';


/**
 * Generated class for the DatoEmpleadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dato-empleado',
  templateUrl: 'dato-empleado.html',
})
export class DatoEmpleadoPage {

	public empleadoID : number;



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.empleadoID = this.navParams.get('empleadoID');
  	console.log(this.empleadoID);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DatoEmpleadoPage');
  }

}
