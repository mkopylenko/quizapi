import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('next')
  getNextQuestion() {
    const question = this.quizService.getNextQuestion();
    return {
      id: question?.getQuestionId(),
      question: question?.getQuestion(),
      answers: question?.getAnswers(),
    };
  }

  @Get('prev')
  getPrevQuestion() {
    const question = this.quizService.getPrevQuestion();
    return {
      id: question?.getQuestionId(),
      question: question?.getQuestion(),
      answers: question?.getAnswers(),
    };
  }

  @Post('answer')
  setAnswer(@Body('answer') answer: string) {
    this.quizService.setAnswer(answer);
    return { message: 'Answer submitted successfully' };
  }

  @Get('current')
  getCurrentSelection() {
    const question = this.quizService.getCurrentSelection();
    return {
      id: question?.getQuestionId(),
      question: question?.getQuestion(),
      answers: question?.getAnswers(),
    };
  }
}

