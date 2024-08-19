import { Injectable } from '@nestjs/common';
import { QuestionData } from './question_data';
import { QuestionDataList } from './question_data_list';
import { Quiz } from './quiz';

@Injectable()
export class QuizService {

  private readonly quiz: Quiz;
  private readonly MALFORMED_DATA_ERROR = 'Malformed quiz data, please contact the administration';
  private readonly MALFORMED_ANSWERS_ERROR = 'Malformed answers data, please contact the administration';

  constructor() {
        const data1 = new QuestionData('What is 1+2?', ['1', '3', '100'], 1, 0);
        const data2 = new QuestionData('What is 1+20?', ['21', '3', '100'], 0, 1);
        const data3 = new QuestionData('What is 2*3?', ['1', '3', '6'], 2, 2);
        const list = new QuestionDataList(data1);
        list.add(data2);
        list.add(data3);
        this.quiz = new Quiz(list);
        console.log('Quiz data:');
        console.log(this.quiz.getData());
    }

  getNextQuestion() {
    try{
        console.log(`Getting next question, current question id: ${this.quiz.getCurrentSelection().getQuestionId()}`);
        return this.quiz.getNextQuestion();
    }
    catch(err) {
        console.error(err);
        throw new Error(this.MALFORMED_DATA_ERROR)
    }
  }

  getPrevQuestion() {
    try{
        console.log(`Getting previous question, current question id: ${this.quiz.getCurrentSelection().getQuestionId()}`);
        return this.quiz.getPrevQuestion();
    }
    catch(err) {
        console.error(err);
        throw new Error(this.MALFORMED_DATA_ERROR)
    }
  }

  setAnswer(answerIndex: number) {
    try{
        console.log(`Setting answer (answer index: ${answerIndex}), current question id: ${this.quiz.getCurrentSelection().getQuestionId()}`);
        this.quiz.setAnswer(answerIndex);
    }
    catch(err) {
        console.error(err);
        throw new Error(this.MALFORMED_ANSWERS_ERROR)
    }
  }

  getCurrentSelection() {
    try{
        return this.quiz.getCurrentSelection();
    }
    catch(err) {
        console.error(err);
        throw new Error(this.MALFORMED_DATA_ERROR)
    }
  }

  getGrade(){
    try{
        console.log(`Calculating grade, answers data: ${JSON.stringify(Object.fromEntries(this.quiz.getAnswersData()))}`);
        return this.quiz.calculateGrade();
    }
    catch(err) {
        console.error(err);
        throw new Error(this.MALFORMED_ANSWERS_ERROR)
    }
  }
}


