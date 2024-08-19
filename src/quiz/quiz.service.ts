import { Injectable } from '@nestjs/common';
import { QuestionData } from './question_data';
import { QuestionDataList } from './question_data_list';
import { Quiz } from './quiz';

@Injectable()
export class QuizService {
  private data1 = new QuestionData('What is 1+2?', ['1', '3', '100'], '3', 0);
  private data2 = new QuestionData('What is 1+20?', ['21', '3', '100'], '21', 1);
  private data3 = new QuestionData('What is 2*3?', ['1', '3', '6'], '6', 2);
  private list = new QuestionDataList(this.data1);
  private quiz = new Quiz(this.list);

  constructor() {
    this.list.add(this.data2);
    this.list.add(this.data3);
  }

  getNextQuestion() {
    return this.quiz.getNextQuestion();
  }

  getPrevQuestion() {
    return this.quiz.getPrevQuestion();
  }

  setAnswer(answer: string) {
    this.quiz.setAnswer(answer);
  }

  getCurrentSelection() {
    return this.quiz.getCurrentSelection();
  }
}


