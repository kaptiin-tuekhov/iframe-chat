/// <reference path="../typings/index.d.ts" />

import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ADD_IFRAME } from './iframes';
import { ADD_MESSAGE } from './chatLog';


interface AppState {
  iframes: Array<string>;
  chatLog: Array<Object>;
}

@Component({
  selector: 'app-root',
  template:
    `<button md-fab (click)="addIframe()">
      <md-icon class="md-24">add</md-icon>
    </button>
    <ifram *ngFor="let iframe of iframes | async" [iframe]="iframe"
    [chatLog] = "chatLog | async" (addMessage) = "addMessage(iframe, $event)">
    </ifram>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  iframes: Observable<any>;
  chatLog: Observable<any>;
  iframeCount: number;
  constructor(private store: Store<AppState>){
    this.iframes = store.select('iframes');
    this.chatLog = store.select('chatLog');
    this.iframeCount = 0;
  }

  addIframe() {
    this.iframeCount++;
    this.store.dispatch({type: ADD_IFRAME, payload: `iframe${this.iframeCount}`});
    this.store.dispatch({type: ADD_MESSAGE, payload: {
      from: 'System',
      message: `iframe${this.iframeCount} joined`
    }})
  }
  addMessage(from, chat) {
    this.store.dispatch({type: ADD_MESSAGE, payload: {from: from, message: chat}})
  }
}
