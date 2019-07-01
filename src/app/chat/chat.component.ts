import { Component, OnInit } from '@angular/core';
// import { Apollo } from 'apollo-angular';
// import gql from 'graphql-tag';
import { HttpClient, HttpHeaders } from '@angular/common/http';

type APIResponse = {
  data: {
    allChats: Array<Chat>
  }
}

type Chat = {
  name: string
  body: string
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.styl']
})
export class ChatComponent implements OnInit {
  chats = [];
  loading = false;
  model = { name: '', body: '' };
  ENDPOINT = 'https://gachat-api.herokuapp.com/graphql';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.fetchAllChats();
  }

  isFetching() {
    return this.loading;
  }

  private fetchAllChats() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.loading = true;
    this.http
      .post<APIResponse>(this.ENDPOINT, {
        query: '{ allChats { name body } }'
      }, { headers })
      .subscribe(
        response => this.setChats(response.data.allChats)
      )
    this.loading = false;
  }

  private setChats(chats: Array<Chat>) {
    this.chats = [ ...this.chats, ...chats ];
  }

  onSubmit() {
    this.createChat(this.model);
    this.chats = [ ...this.chats, this.model ];
    this.model = { ...this.model, body: '' };
  }

  private createChat(chat: Chat) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    this.http
      .post<Object>(this.ENDPOINT, {
        query: `mutation { createChat(name: "${chat.name}", body: "${chat.body}") { name body } }`
      }, { headers })
      .subscribe(
        response => console.log(response)
      )
  }
}
