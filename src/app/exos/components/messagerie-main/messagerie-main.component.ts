import { MessagerieService } from './../../services/messagerie.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMessage } from '../../models/imessage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messagerie-main',
  templateUrl: './messagerie-main.component.html',
  styleUrl: './messagerie-main.component.scss'
})
export class MessagerieMainComponent implements OnInit, OnDestroy {
  messages! : IMessage[];
  private _subLatestMessage! : Subscription;

  constructor(
    private _msgService : MessagerieService
  ){}

  ngOnDestroy(): void {
    this._subLatestMessage.unsubscribe();
  }

  ngOnInit(): void {
    this.messages = this._msgService.getAll();
    this._subLatestMessage = this._msgService.obsLastestMessage.subscribe({
      next : (data: IMessage) => this._setLatestMessage(data)
      //next : (data: IMessage) => this.messages.push(data)
    });
  }

  private _setLatestMessage(msg : IMessage) : void | undefined{
    alert("Nouveau message!");
    this.messages.push(msg);
    console.log(msg);
  }
}
