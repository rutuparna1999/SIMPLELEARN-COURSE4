import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { RouterModule, Routes } from '@angular/router';
import { QuizService } from './services/quiz.service';
@NgModule({
  declarations: [AppComponent, QuizListComponent, QuizComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    //RouterModule.forRoot(routes),
  ],
  providers: [QuizService],
  bootstrap: [AppComponent],
})
export class AppModule { }
