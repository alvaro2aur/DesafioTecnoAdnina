import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmpleadosProvider } from '../../providers/empleados/empleados';
import { AlertController } from 'ionic-angular';

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

	newEmpleado={nombre:"", apellido:"", run:"", genero:"", fecha:"", direccion:"", confirmacion:""};		

  constructor(public navCtrl: NavController, public navParams: NavParams, public provider: EmpleadosProvider, public alertCtrl: AlertController) {  	
  	}

  	addEmpleado(){
  		this.provider.http.post("http://localhost:1880/post", this.newEmpleado)
  		.subscribe(
  			(data)=>{
  				console.log("Usuario agregado");
  				console.log(data);
  			});
  		//console.log(this.newEmpleado);
  		this.newEmpleado={nombre:"", apellido:"", run:"", genero:"", fecha:"", direccion:"", confirmacion:""};		
  	}

  	showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Listo!',
      subTitle: 'Tus datos han sido registrados en nuestra base de datos',
      buttons: ['OK']
    });
    alert.present();
  }

  	
  ionViewDidLoad() {
  	
    console.log('ionViewDidLoad AnadirPage');
  }


  

}
