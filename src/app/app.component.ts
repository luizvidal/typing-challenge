import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  {
  randomText = faker.lorem.sentence(10);
  enteredText = '';

  onInput(event: any) {
    this.enteredText = event.value;
  }

  compare(randomLetter: string, enteredLetter: string): string {
    if (!enteredLetter) return 'pending';
    return (randomLetter === enteredLetter) ? 'correct' : 'incorrect';
  }

}
