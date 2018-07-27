import { Component } from '@angular/core';
import { NavController,  AlertController } from 'ionic-angular';
import { RegistrarsePage } from '../registrarse/registrarse';
import { IngresarPage } from '../ingresar/ingresar';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public registrar: AlertController, public entrar:AlertController ) {

  }
Regist(){
    let mialerta = this.registrar.create({
      title :'DATOS',
      message:'Todos los campos son requeridos',
      inputs: [
        {
          name: 'nombres',
    
          placeholder: 'nombre',
        },
        {
          name : 'apellidos',
          placeholder: 'apellidos',
        
        },
        {
          name: 'CI',
    
          placeholder: 'C.I',
        },
        {
          name: 'correo',
    
          placeholder: 'correo electronico ejmpl@gmail.com',
        },
        {
          name: 'cel',
    
          placeholder: 'numero de celular',
        },
        {
          name : 'curso',
          placeholder: 'cuso ejm: 1-2-3-4',
        },

        {
          name : 'paralelo',
          placeholder: 'paralelo ejm:A-B-C',
        }
      ],

      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'guardar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
  mialerta.present();
  // this.navCtrl.push( RegistrarsePage );
}
Ingresar(){
  let mialerta = this.entrar.create({
    title:'titulo de alerta',
    message:'mensaje',
    inputs: [
      {
        name: 'correo',
  
        placeholder: 'Usuario/correo electronico',
      },
      {
        name: 'clave',
  
        placeholder: 'contraseña',
      },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'guardar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });

mialerta.present();
}
}
