import { Component } from '@angular/core';
import { NavController,  AlertController } from 'ionic-angular';
import { RegistrarsePage } from '../registrarse/registrarse';
import { IngresarPage } from '../ingresar/ingresar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public registrar: AlertController, public entrar:AlertController ) {

  }
Regist(){
    let mialerta = this.registrar.create({
      title:'titulo de alerta',
      message:'mensaje',
      buttons:['entendido']
    });
  mialerta.present();
  // this.navCtrl.push( RegistrarsePage );
}
Ingresar(){
  let mialerta = this.entrar.create({
    title:'titulo de alerta',
    message:'mensaje',
    buttons:['entendido']
  });
mialerta.present();
}

}
