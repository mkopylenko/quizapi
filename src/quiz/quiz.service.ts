import { Injectable } from '@nestjs/common';
import { QuestionData } from './question_data';
import { QuestionDataList } from './question_data_list';
import { Quiz } from './quiz';

@Injectable()
export class QuizService {

  private readonly quiz: Quiz;

  constructor() {
    const data1 = new QuestionData('What is 1+2?', ['1', '3', '100'], 1, 0);
    const data2 = new QuestionData('What is 1+20?', ['21', '3', '100'], 0, 1);
    const data3 = new QuestionData('What is 2*3?', ['1', '3', '6'], 2, 2);
    const list = new QuestionDataList(data1);
    list.add(data2);
    list.add(data3);
    this.quiz = new Quiz(list);
    //console.log(this.quiz.getData());
    console.log(this.quiz.getCurrentSelection());
    }

  getNextQuestion() {
    return this.quiz.getNextQuestion();
  }

  getPrevQuestion() {
    return this.quiz.getPrevQuestion();
  }

  setAnswer(answerIndex: number) {
    this.quiz.setAnswer(answerIndex);
  }

  getCurrentSelection() {
    return this.quiz.getCurrentSelection();
  }

  getGrade(){
    return this.quiz.calculateGrade();
  }
}


