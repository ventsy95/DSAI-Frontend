import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  onDisconnect() : Observable<any> {
    return this.socket.fromEvent('disconnectClient');
  }

  onError() : Observable<any> {
    return this.socket.fromEvent('receivedError');
  }
  
  getData() : Observable<any> {
    return this.socket.fromEvent('data').pipe(map((data: string) => JSON.parse(data)));
  }
}
