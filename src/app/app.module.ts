import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ChatComponent]
})
export class AppModule { }
