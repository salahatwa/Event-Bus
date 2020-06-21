import { Component } from '@angular/core';
import { Article } from 'src/app/shared/article.interface';
import { Events } from './shared/event.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample-communication-subject';

  get event() {
    return Events;
  }

  articles: Array<Article> = [
    {
      "id": 1,
      "title": "stock details",
      "body": "this component display stock details"
    },
    {
      "id": 2,
      "title": "portfolio details",
      "body": "this component display portfolio details"
    },
    {
      "id": 3,
      "title": "outstand order details",
      "body": "this component display outstand order details"
    },

  ]
}
