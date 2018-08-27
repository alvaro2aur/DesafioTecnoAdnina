import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatoEmpleadoPage } from '../dato-empleado/dato-empleado';
import { EmpleadosProvider } from '../../providers/empleados/empleados';


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

  empleados
  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: EmpleadosProvider) {
  }



  goToEmpleado(empleado){
    //console.log(empleado);
  	this.navCtrl.push(DatoEmpleadoPage, {empleado: empleado});
  }

  ionViewDidLoad() {
    this.provider.getEmpleados()
    .subscribe(
      (data)=>{this.empleados = data;},
      (error)=>{console.log(error);}
      )
    //console.log('ionViewDidLoad ContactosPage');
  }

}
