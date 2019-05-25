import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsService } from '../../services/questions.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {

  points:number = 0;
  items:any = [];
  question:any = {};
  questionMin:number = 0;
  questionMax:number = 0;
  answers:any = [];
  response:number = 0;
  pointer:any = 0;
  random:any = 0;

  constructor(private questionsService:QuestionsService) { }

  ngOnInit() {
    this.questionsService.getQuestions().subscribe((res)=>{
      this.items = res;
      this.items.sort(function(a, b){return 0.5 - Math.random()});
      this.showQuestion();
    })
    this.questionsService.upload();
  }
  showQuestion() {
    this.question = this.items[this.pointer];
    this.answers = [this.question.res_a, this.question.res_b, this.question.res_c, this.question.res_d];
    this.answers.sort(function(a, b){return 0.5 - Math.random()});
    this.response = 0;
  }
  makeAnswer(answer) {
    if(answer == this.question.res_a) {
      this.response = 1;
      this.points++;
    } else {
      this.response = 2;
      this.points--;
    }
    this.rand();
    this.pointer++;
  }
  rand() {
    let min=1;
    let max=4;
    let random =Math.floor(Math.random() * (+max - +min)) + +min;
    this.random = random;
  }

}
