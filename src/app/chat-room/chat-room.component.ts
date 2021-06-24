import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
  providers:[ChatService]
})
export class ChatRoomComponent implements OnInit {
  // room: String;
  // message: String;
  // messages: string[] = [];

  constructor(private chatService:ChatService, private route: ActivatedRoute){

  }

  // sendMessage() {
  //   console.log("Component getMessages called", this.message, this.room)
  //   this.chatService.sendMessage(this.message, this.room);
  //   this.message = '';
  // }

  ngOnInit(): void {
    // this.chatService
    // .getMessages()
    // .subscribe((message: string) =>{
    //   this.messages.push(message);
    // })

    // this.room = this.route.snapshot.params.id;
  }

}
