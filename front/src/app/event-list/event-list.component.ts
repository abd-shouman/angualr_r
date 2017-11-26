import { Component, OnInit } from '@angular/core';
import { Event } from '../event'
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  
  constructor(private _eventService:EventService) {}

  ngOnInit() {
    this._eventService.getEvents()
    .subscribe(events => this.events = events);
  }

}
