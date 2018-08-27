import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { AnadirPage } from '../pages/anadir/anadir';
import { ContactosPage } from '../pages/contactos/contactos';
import { DatoEmpleadoPage } from '../pages/dato-empleado/dato-empleado';
import { EmpleadosProvider } from '../providers/empleados/empleados';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    AnadirPage,
    ContactosPage,
    DatoEmpleadoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    AnadirPage,
    ContactosPage,
    DatoEmpleadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmpleadosProvider
  ]
})
export class AppModule {}
