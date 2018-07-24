import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConcoursPhotosGalleriePage } from '../concours-photos-gallerie/concours-photos-gallerie';

@Component({
  selector: 'page-concours-photos',
  templateUrl: 'concours-photos.html'
})
export class ConcoursPhotosPage {

  constructor(public navCtrl: NavController) {
  }
  goToConcoursPhotosGallerie(params){
    if (!params) params = {};
    this.navCtrl.push(ConcoursPhotosGalleriePage);
  }
}
