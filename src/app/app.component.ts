import { Component } from '@angular/core';
import wordsArray from '../utils/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10; //default word limit

  updateLimitSize = (newLimit : number) => {
    this.limit = newLimit;
  }

  generateWords = () => {
    let shuffled = wordsArray.sort(() => 0.5 - Math.random());
    this.words = shuffled.slice(0, this.limit).join(" "); 
  }
}
