export class QuestionData {
    private question: string;
    private answers: string[];
    private correctAnswerIndex: number;
    private prev: QuestionData | null = null;
    private next: QuestionData | null = null;
    private readonly questionId: number;
  
    public getQuestionId() {
      return this.questionId;
    }
  
    public getQuestion() {
      return this.question;
    }
  
    public getAnswers() {
      return this.answers
    }
  
    public getCorrectAnswerIndex() {
      return this.correctAnswerIndex;
    }
  
    public getPrev() {
      return this.prev;
    }
  
    public setPrev(data: QuestionData) {
      this.prev = data
    }
  
    public getNext() {
      return this.next;
    }
  
    public setNext(data: QuestionData) {
      this.next = data
    }
    constructor(question: string, answers: string[], correctAnswerIndex: number, id: number) {
      if (!answers || answers.length < 2) {
        throw new Error('Number of answers should be greater than 1');
      }
      this.question = question;
      this.answers = answers;
      this.correctAnswerIndex = correctAnswerIndex;
      this.questionId = id;
    }
  }