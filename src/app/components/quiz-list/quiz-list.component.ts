import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  quizes: any[] = [];
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    console.log(this.quizService.getAll());
    this.quizes = this.quizService.getAll();
  }

}
