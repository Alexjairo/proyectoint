import { Component, ViewChild, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
 

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map; 

  constructor(public navCtrl: NavController) {

  }
  ngOnInit() {
    this.startGoogleMap();
  }

  startGoogleMap() {
    const Ubicacion =new google.maps.LatLng(-0.273587, -78.546235);
    const mapProp= {
  
        center: Ubicacion,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    var Marcador = new google.maps.Marker({
    position:Ubicacion,
    map:map,
    
   });
  
  }
  
}
