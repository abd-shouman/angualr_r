import { Injectable } from '@angular/core';
import { Event } from './event'
import { Http, Headers, Response } from '@angular/http';
//import { HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
  private baseUrl: string = ''; //Holder For RestApi address .. Currently local
  
  constructor(private http: Http) {}

  //Get Requests
  getEvents(): Observable<Event[]> {
    let events = this.http.get(this.baseUrl + '../assets/events.json', {headers: this.getHeaders()})
      .map(this.mapEvents);
      return events;
  }
  
  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  private toEvent(r:any): Event{
    let event = <Event>({
      eventId: Number.parseInt(r.eventId),
      title: r.title,
      description: r.description,
      startDateTime: Number.parseInt(r.startDateTime),
      endDateTime: Number.parseInt(r.endDateTime),
      url: r.url
    });
    console.log('Parsed event:', event);
    return event;
  }

  private mapEvents(response:Response): Event[]{
    // The response of the API has a results
    // property with the actual results
    console.log(response)
    return response.json()

    // let events : Event[] = [];
    // events = response.json()
    // return events
    
    //return events
    // return events.map(this.toEvent)
    //console.log(response.json().map(this.toEvent))
    //return this.toEvent(response.json());   
 }

  

}
