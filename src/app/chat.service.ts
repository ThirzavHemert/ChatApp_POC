import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3000';
    private socket;

  constructor() {
    this.socket = io(this.url);
   }

   public sendMessage(message, room){
     console.log("Service sendMessages called", message, ' in ', room)
    this.socket.emit('new-message', message, room);
  }

  joinRoom(data)
    {
      console.log("Joinroom", data.user, data.room);
      this.socket.emit('join', data.user, data.room);
    }

    newUserJoined()
    {
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new user joined', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

  public getMessages = () => {
    console.log("Service getMessages called")
        return Observable.create((observer) => {
          console.log("Service in observable")
            this.socket.on('goMessage', (message) => {
              console.log("messgae: ", message)
                observer.next(message);
            });
        });
    }
}
