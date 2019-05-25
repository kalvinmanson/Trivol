import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Observable<any[]>;

  upquestions:any = [];

  constructor(private db: AngularFirestore) {
    this.questions = db.collection('questions').valueChanges();
  }

  getQuestions() {
    return this.db.collection('questions').valueChanges();
  }
  upload() {
    this.upquestions.forEach((e)=> {
      //this.db.collection('questions').add(e);
    })
  }
}
