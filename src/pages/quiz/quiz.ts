import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuizQuestionPage } from '../quiz-question/quiz-question';

@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html'
})
export class QuizPage {

  constructor(public navCtrl: NavController) {
  }
  goToQuizQuestion(params){
    if (!params) params = {};
    this.navCtrl.push(QuizQuestionPage);
  }
}
