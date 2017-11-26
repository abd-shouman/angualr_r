import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventService } from './event.service';
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
