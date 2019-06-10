import { Injectable, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subject } from 'rxjs';
import { map, first } from 'rxjs/operators';

const URL = "ws://127.0.0.1:54000";

export interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  public messages: Subject<Message>;

  constructor(private socket: Socket) {
  }

  onConnect() : Observable<any> {
    return this.socket.fromEvent('connectClient');
  }

  getData() : Observable<any> {
    return this.socket.fromEvent('data');
  }

  onDisconnect() : Observable<any> {
    return this.socket.fromEvent('disconnectClient');
  }

  ngOnInit(){

  }
}
