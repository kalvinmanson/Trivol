import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  questions: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.questions = db.collection('questions').valueChanges();
  }

  getQuestions() {
    return this.db.collection('questions').valueChanges();
  }
}
