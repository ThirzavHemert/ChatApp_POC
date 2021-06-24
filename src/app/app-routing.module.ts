import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { StreamComponent } from './stream/stream.component';

const routes: Routes = [
  {path: 'stream/:id', pathMatch: 'full', component: StreamComponent},
   {path: 'chat/:id', pathMatch: 'full', component: ChatRoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
