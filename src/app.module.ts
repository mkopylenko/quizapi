import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizService } from './quiz/quiz.service';
import { QuizController } from './quiz/quiz.controller';

@Module({
  imports: [],
  controllers: [AppController, QuizController],
  providers: [AppService, QuizService],
})
export class AppModule {}
