import { QuizConfig } from './quiz-config.model';
import { Question } from './question.model';
export class Quiz {
    id?: number;
    name?: string;
    description?: string;
    config?: QuizConfig;
    questions?: Question[];

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.config = new QuizConfig(data.config);
            //console.log(`config: ${JSON.stringify(this.config)}`);
            this.questions = [];
            data.questions.forEach((q: any) => {
                this.questions!.push(new Question(q));
            });
        }
    }
}
