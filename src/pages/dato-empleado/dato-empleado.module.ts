import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatoEmpleadoPage } from './dato-empleado';

@NgModule({
  declarations: [
    DatoEmpleadoPage,
  ],
  imports: [
    IonicPageModule.forChild(DatoEmpleadoPage),
  ],
})
export class DatoEmpleadoPageModule {}
