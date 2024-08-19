import { Test, TestingModule } from '@nestjs/testing';
import { QuizService } from './quiz.service';
import { Quiz } from './quiz';
import { QuestionDataList } from './question_data_list';
import { QuestionData } from './question_data';

describe('QuizService', () => {
  let service: QuizService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuizService],
    }).compile();

    service = module.get<QuizService>(QuizService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getNextQuestion', () => {
    it('should return the next question', () => {
      const question = service.getNextQuestion();
      expect(question).toBeDefined();
      expect(question.getQuestionId()).toBe(1);
    });

    it('should throw an error if data is malformed', () => {
      jest.spyOn(service['quiz'], 'getNextQuestion').mockImplementation(() => {
        throw new Error();
      });
      expect(() => service.getNextQuestion()).toThrowError(service['MALFORMED_DATA_ERROR']);
    });
  });

  describe('getPrevQuestion', () => {
    it('should return the previous question', () => {
      service.getNextQuestion(); // Move to the next question
      const question = service.getPrevQuestion();
      expect(question).toBeDefined();
      expect(question.getQuestionId()).toBe(0);
    });

    it('should throw an error if data is malformed', () => {
      jest.spyOn(service['quiz'], 'getPrevQuestion').mockImplementation(() => {
        throw new Error();
      });
      expect(() => service.getPrevQuestion()).toThrowError(service['MALFORMED_DATA_ERROR']);
    });
  });

  describe('setAnswer', () => {
    it('should set the answer for the current question', () => {
      service.setAnswer(1);
      expect(service['quiz'].getAnswersData().get(0)[0]).toBe(1);
    });

    it('should throw an error if answers data is malformed', () => {
      jest.spyOn(service['quiz'], 'setAnswer').mockImplementation(() => {
        throw new Error();
      });
      expect(() => service.setAnswer(1)).toThrowError(service['MALFORMED_ANSWERS_ERROR']);
    });
  });

  describe('getCurrentSelection', () => {
    it('should return the current question', () => {
      const question = service.getCurrentSelection();
      expect(question).toBeDefined();
      expect(question.getQuestionId()).toBe(0);
    });

    it('should throw an error if data is malformed', () => {
      jest.spyOn(service['quiz'], 'getCurrentSelection').mockImplementation(() => {
        throw new Error();
      });
      expect(() => service.getCurrentSelection()).toThrowError(service['MALFORMED_DATA_ERROR']);
    });
  });

  describe('getGrade', () => {
    it('should calculate and return the grade', () => {
      service.setAnswer(1);
      service.getNextQuestion();
      service.setAnswer(0);
      const grade = service.getGrade();
      expect(grade).toBeDefined();
      expect(typeof grade).toBe('number');
    });

    it('should throw an error if answers data is malformed', () => {
      jest.spyOn(service['quiz'], 'calculateGrade').mockImplementation(() => {
        throw new Error();
      });
      expect(() => service.getGrade()).toThrowError(service['MALFORMED_ANSWERS_ERROR']);
    });
  });
});
