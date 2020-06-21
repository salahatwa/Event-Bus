import { Component, OnInit, Input } from '@angular/core';
import { EventBusService } from 'src/app/shared/event-bus.service';
import { EventData, Events } from '../../shared/event.class';
import { Article } from 'src/app/shared/article.interface';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() list: Article;

  constructor(private eventBusService: EventBusService) { 
  }
 

  ngOnInit() {
 
    // this.eventBusService.back().subscribe((data)=>{
    //   console.log(data);
    // });
  }

  viewArticle1(article: Article) {
    this.eventBusService.emit(new EventData(Events.SelectArticleDetail, article));
  }

  viewArticle2(article: Article) {
    this.eventBusService.emit(new EventData(Events.ReadArticleDetail, article));
  }

}