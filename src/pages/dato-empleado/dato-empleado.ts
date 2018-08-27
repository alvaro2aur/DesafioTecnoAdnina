import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactosPage } from '../contactos/contactos';
import { EmpleadosProvider } from '../../providers/empleados/empleados';


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

	public empleado : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: EmpleadosProvider) {
  	this.empleado = this.navParams.get('empleado');
  	//console.log(this.navParams);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad DatoEmpleadoPage');
  }

}
