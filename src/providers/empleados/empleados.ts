import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


/*
  Generated class for the EmpleadosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmpleadosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EmpleadosProvider Provider');
  }

  getEmpleados(){
  	return this.http.get('http://localhost:1880/get');
  }

  


}
