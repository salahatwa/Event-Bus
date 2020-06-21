import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EventBusService } from 'src/app/shared/event-bus.service';
import { Article } from 'src/app/shared/article.interface';
import { Subscription } from 'rxjs';
import { Events, ICallback } from 'src/app/shared/event.class';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnDestroy {
  @Input() eventName: string;



  subscribition: Subscription;

  detail1: Article = {
    "id": 0,
    "title": "commission details",
    "body": "this component display commisssion details"
  }

  constructor(private eventBusService: EventBusService) {
  }

  ngOnDestroy() {
    this.subscribition.unsubscribe();
  }

  ngOnInit() {
    this.listener(
      (err, data) => { console.log("DO something in callBackFunction();" + data) });
  }

  listener(callback: ICallback) {
    this.subscribition = this.eventBusService.on(this.eventName, (data: Article) => {
      this.detail1 = data;
      console.log(data);
      callback(null, data);
    });
  }
}