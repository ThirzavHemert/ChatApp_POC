import { Component } from '@angular/core';
import { ChatService } from './chat.service';
// import * as flvjs from '../node_modules/flv.js/dist/flv';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'test12';
  // user:String;
  // room:String;
  // message: String;
  // messages: string[] = [];

  // constructor(private chatService:ChatService){

  // }

  // join(){
  //       this.chatService.joinRoom({user:this.user, room:this.room});
  //   }

  // sendMessage() {
  //   console.log("Component getMessages called", this.message)
  //   this.chatService.sendMessage(this.message);
  //   this.message = '';
  // }

  ngOnInit(){
    // this.chatService
    // .getMessages()
    // .subscribe((message: string) =>{
    //   this.messages.push(message);
    // })

    // var videoElement = document.getElementById('videoElement');
    // var flvPlayer = flvjs.createPlayer({
    //   type: 'flv',
    //   isLive: true,
    //   url: 'http://145.49.4.49:8000/live/STREAM_NAME.flv'

    // });
    // flvPlayer.attachMediaElement(videoElement);
    // flvPlayer.load();
    // flvPlayer.play();
  }
}
