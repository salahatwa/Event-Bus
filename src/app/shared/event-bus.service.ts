import { Injectable } from '@angular/core';
import { Subject, Subscription, BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EventData, ICallback } from 'src/app/shared/event.class';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private subject$ = new Subject();
  observable = this.subject$.asObservable();

  constructor() { }

  emit(event: EventData) {
    this.subject$.next(event);
  }

  back() {
    return this.observable;
  }


  on(eventName: string, action: any): Subscription {
    return this.subject$.pipe(
      filter((e: EventData) => e.name === eventName),
      map((e: EventData) => e["value"])).subscribe(action);
  }
}
