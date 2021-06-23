import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';

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
  messages: string[] = [];

  constructor(private chatService:ChatService, private route:ActivatedRoute) { }

  join(){
        this.chatService.joinRoom({user:this.user, room:this.room});
    }

  ngOnInit(): void {
    this.room = this.route.snapshot.params.id;
  }

}
