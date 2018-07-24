import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KillerCiblePage } from '../killer-cible/killer-cible';
import { KillerTableauDeChassePage } from '../killer-tableau-de-chasse/killer-tableau-de-chasse';

@Component({
  selector: 'page-killer',
  templateUrl: 'killer.html'
})
export class KillerPage {

  constructor(public navCtrl: NavController) {
  }
  goToKillerCible(params){
    if (!params) params = {};
    this.navCtrl.push(KillerCiblePage);
  }goToKillerTableauDeChasse(params){
    if (!params) params = {};
    this.navCtrl.push(KillerTableauDeChassePage);
  }
}
