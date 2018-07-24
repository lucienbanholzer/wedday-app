import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { KillerPage } from '../pages/killer/killer';
import { KillerCiblePage } from '../pages/killer-cible/killer-cible';
import { KillerTableauDeChassePage } from '../pages/killer-tableau-de-chasse/killer-tableau-de-chasse';
import { QuizPage } from '../pages/quiz/quiz';
import { QuizQuestionPage } from '../pages/quiz-question/quiz-question';
import { RemerciementsPage } from '../pages/remerciements/remerciements';
import { ConcoursPhotosPage } from '../pages/concours-photos/concours-photos';
import { ConcoursPhotosGalleriePage } from '../pages/concours-photos-gallerie/concours-photos-gallerie';
import { LivrePage } from '../pages/livre/livre';


import { AccueilPage } from '../pages/accueil/accueil';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = AccueilPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToAccueil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AccueilPage);
  }goToKiller(params){
    if (!params) params = {};
    this.navCtrl.setRoot(KillerPage);
  }goToKillerCible(params){
    if (!params) params = {};
    this.navCtrl.setRoot(KillerCiblePage);
  }goToKillerTableauDeChasse(params){
    if (!params) params = {};
    this.navCtrl.setRoot(KillerTableauDeChassePage);
  }goToQuiz(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QuizPage);
  }goToQuizQuestion(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QuizQuestionPage);
  }goToRemerciements(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RemerciementsPage);
  }goToConcoursPhotos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ConcoursPhotosPage);
  }goToConcoursPhotosGallerie(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ConcoursPhotosGalleriePage);
  }goToLivre(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LivrePage);
  }
}
