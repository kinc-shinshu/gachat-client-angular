import { Component, OnInit } from '@angular/core';

import { chats }  from './chat_mock';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.styl']
})
export class ChatComponent implements OnInit {
  chats = [];
  model = { name: '', body: '' };

  constructor() { }

  ngOnInit() {
    this.fetchChat();
  }

  onSubmit() {
    this.chats = [ ...this.chats, this.model ];
    this.model = { ...this.model, body: '' };
  }

  isFetching() {
    return this.chats.length === 0;
  }

  // TODO: rewrite REAL fetching
  private async fetchChat() {
    await this.sleep(1000);
    this.chats = chats;
  }

  private sleep(msec : number) {
  return new Promise(function(resolve) {
    setTimeout(function() {resolve()}, msec);
  })
}
}
