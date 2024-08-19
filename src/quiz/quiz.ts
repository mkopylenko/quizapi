export class Quiz {
    private answers = new Map<number, string[]>;
    private questionsList: QuestionDataList;
    constructor(questionsList: QuestionDataList) {
      this.questionsList = questionsList;
    }
  
  
    public getNextQuestion() {
      const nextQuestion = this.questionsList.selectNext();
      if (!nextQuestion) {
        //it's the last question
        // TODO: calculate/show grade
      }
      return nextQuestion;
    }
  
    public getPrevQuestion() {
      const prevQuestion = this.questionsList.selectPrev();
      if (!prevQuestion) {
        //it's the last question
        // TODO: calculate/show grade
      }
      return prevQuestion;
    }
  
    public setAnswer(answer: string) {
      //on answer submitted
      const currentSelection = this.questionsList.getCurrentSelection()
      this.answers.set(currentSelection?.getQuestionId, [answer, currentSelection?.getCorrectAnswer]);
      //TODO: the answers map will be used to check answer and set grades
    }
  
    public getCurrentSelection() {
      return this.questionsList.getCurrentSelection()
    }
}
  