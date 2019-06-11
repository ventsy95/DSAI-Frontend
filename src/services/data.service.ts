import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

export interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

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
}
