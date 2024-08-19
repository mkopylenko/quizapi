export class QuestionData {
    private question: string;
    private answers: string[];
    private correctAnswer: string;
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
  
    public getCorrectAnswer() {
      return this.correctAnswer;
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
    constructor(question: string, answers: string[], correctAnswer: string, id: number) {
      if (!answers || answers.length < 2) {
        throw 'Number of answers should be greater than 1';
      }
      this.question = question;
      this.answers = answers;
      this.correctAnswer = correctAnswer;
      this.questionId = id;
    }
  }