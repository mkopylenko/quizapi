import { QuestionDataList } from "./question_data_list";

export class Quiz {

    private answers = new Map<number, number[]>;
    private questionsList: QuestionDataList;
    constructor(questionsList: QuestionDataList) {
      this.questionsList = questionsList;
    }
  
  
    public getNextQuestion() {
      return this.questionsList.selectNext();
    }
  
    public getPrevQuestion() {
      return this.questionsList.selectPrev();
    }
  
    public setAnswer(answerIndex: number) {
      const currentSelection = this.questionsList.getCurrentSelection();
      if (!currentSelection){
        throw new Error('setAnswer(): Malformed quiz data: no current selection');
      }
      const questionId = currentSelection.getQuestionId();
      this.answers.set(questionId, [answerIndex, currentSelection.getCorrectAnswerIndex()]);
    }
  
    public getCurrentSelection() {
      return this.questionsList.getCurrentSelection()
    }

    public getData(){
        return this.questionsList.getData();
    }

    public getAnswersData(){
        return this.answers;
    }

    public calculateGrade(): number {
        const questionsCount = this.questionsList.getData().size;
        if (questionsCount==0) {
            throw new Error('calculateGrade(): No answers data specified');
        }
        let correctAnswersCount =0;
        for (const [key, value] of this.answers){
            if (value[0] === value[1]) {
                correctAnswersCount++;
                continue;
            } 
        }
        return Math.round((correctAnswersCount * 100)/ questionsCount);
    }
}
  