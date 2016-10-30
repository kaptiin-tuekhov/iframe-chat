

import { Component, Input, Output } from '@angular/core';
import { ChangeDetectionStrategy, EventEmitter } from '@angular/core/index';

@Component({
  selector: 'ifram',
  template:
    `<md-card>
      <md-card-title>{{iframe}}</md-card-title>
      <md-card-content>
        <md-list>
          <md-list-item *ngFor="let chat of chatLog">
            [{{chat.from}}]: {{chat.message}}
          </md-list-item>
        </md-list>
        <md-input [(ngModel)]="newChat" placeholder="Write a message">
        </md-input>
      </md-card-content>
      <md-card-actions>
        <button md-raised-button color="primary" (click)= "addMessage.emit(newChat)">SEND</button>
      </md-card-actions>
    </md-card>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class iFrame {
  @Input() chatLog;
  @Input() iframe;
  @Output() addMessage = new EventEmitter();
}