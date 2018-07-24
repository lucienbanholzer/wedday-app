import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AccueilPage } from '../pages/accueil/accueil';
import { RemerciementsPage } from '../pages/remerciements/remerciements';
import { LivrePage } from '../pages/livre/livre';
import { KillerPage } from '../pages/killer/killer';
import { KillerCiblePage } from '../pages/killer-cible/killer-cible';
import { KillerTableauDeChassePage } from '../pages/killer-tableau-de-chasse/killer-tableau-de-chasse';
import { QuizPage } from '../pages/quiz/quiz';
import { QuizQuestionPage } from '../pages/quiz-question/quiz-question';
import { QuizRPonsesPage } from '../pages/quiz-rponses/quiz-rponses';
import { ConcoursPhotosPage } from '../pages/concours-photos/concours-photos';
import { ConcoursPhotosGalleriePage } from '../pages/concours-photos-gallerie/concours-photos-gallerie';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AccueilPage,
    RemerciementsPage,
    LivrePage,
    KillerPage,
    KillerCiblePage,
    KillerTableauDeChassePage,
    QuizPage,
    QuizQuestionPage,
    QuizRPonsesPage,
    ConcoursPhotosPage,
    ConcoursPhotosGalleriePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccueilPage,
    RemerciementsPage,
    LivrePage,
    KillerPage,
    KillerCiblePage,
    KillerTableauDeChassePage,
    QuizPage,
    QuizQuestionPage,
    QuizRPonsesPage,
    ConcoursPhotosPage,
    ConcoursPhotosGalleriePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}