import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrarsePage } from '../registrarse/registrarse';
import { IngresarPage } from '../ingresar/ingresar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
Regist(){
  this.navCtrl.push( RegistrarsePage );
}
Ingresar(){
  this.navCtrl.push(IngresarPage);
}

}
