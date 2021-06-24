import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { ChatService } from '../chat.service';
import { Message } from '../message.model';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css'],
  providers:[ChatService]
})
export class StreamComponent implements OnInit {
  user:String;
  room:String;
  message: String;
  $message: Message;
  messages: Array<{user:String, message:String}> = [];
  div1:boolean=false;

  constructor(private chatService:ChatService, private route:ActivatedRoute) { }

  join(){
    if(this.user != null){
      this.div1=true;
    }

        // this.chatService.joinRoom({user:this.user, room:this.room});
    }
    sendMessage() {
    console.log("Component getMessages called", this.message)

    // let msg: Message = {
    //   user: this.user,
    //   text: this.message,
    // }
    this.$message = {
      user: this.user,
      text: this.message,
    } as Message;

    this.chatService.sendMessage(this.$message);
    this.message = '';
  }

  div1Function(){

    }

  ngOnInit(): void {
    this.chatService
    .getMessages()
    .subscribe(data => this.messages.push(data));

    // this.div1=false;

    this.room = this.route.snapshot.params.id;
  }

}
