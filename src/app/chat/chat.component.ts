import { Component, OnInit } from '@angular/core';

import { chats }  from './chat_mock';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.styl']
})
export class ChatComponent implements OnInit {
  chats = [];

  constructor() { }

  ngOnInit() {
    this.fetchChat();
  }

  // rewrite REAL fetching
  private fetchChat() {
    this.chats = chats;
  }

}
