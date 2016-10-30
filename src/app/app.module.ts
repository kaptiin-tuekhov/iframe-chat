import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { iframeReducer } from './iframes';
import { chatLogReducer } from './chatLog';
import { iFrame } from './iframe.component';


@NgModule({
  declarations: [
    AppComponent,
    iFrame
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({
      iframes: iframeReducer,
      chatLog: chatLogReducer
    }),
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
