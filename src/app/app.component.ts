import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { AnadirPage } from '../pages/anadir/anadir';
import { ContactosPage } from '../pages/contactos/contactos';
import { DatoEmpleadoPage } from '../pages/dato-empleado/dato-empleado';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav : Nav;
  public rootPage:any;

  public pages : Array<{ title : string, component : any, icon : string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.rootPage = InicioPage;
    this.pages = [
      { title : 'Inicio',          component : InicioPage,    icon : 'home'},
      { title : 'Añadir empleado', component : AnadirPage,    icon : 'person-add'},
      { title : 'Ver empleados',   component : ContactosPage, icon : 'contacts'},
      ];



    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }



}

