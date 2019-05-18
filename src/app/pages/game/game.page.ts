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
  answers:any = [];
  response:number = 0;
  random:any = 1;

  constructor(private questionsService:QuestionsService) { }

  ngOnInit() {
    this.questionsService.getQuestions().subscribe((res)=>{
      this.items = res;
      this.showQuestion();
    })
  }
  showQuestion() {
    let random =Math.floor(Math.random() * (this.items.length - 0)) + 0;
    this.question = this.items[random];
    this.answers = [this.question.res_a, this.question.res_b, this.question.res_c, this.question.res_d];
    this.answers.sort(function(a, b){return 0.5 - Math.random()});
    this.response = 0;
    this.rand();
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
  }
  rand() {
    let min=1;
    let max=4;
    let random =Math.floor(Math.random() * (+max - +min)) + +min;
    this.random = random;
  }

}
