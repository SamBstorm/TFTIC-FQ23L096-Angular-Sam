import { Injectable } from '@angular/core';
import { IMessage } from '../models/imessage';
import { Subject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  private _messages : IMessage[];

  private _localKey : string = "messagerie";

  public obsLastestMessage : Subject<IMessage> = new Subject<IMessage>();

  constructor(
    private _local : LocalStorageService
  ) { 
    this._messages = _local.getItem<IMessage[]>(this._localKey) ?? [];
    this._messages.forEach(msg => msg.date = new Date(msg.date));
  }

  public getAll() : IMessage[]{
    return [...this._messages];
  }

  public addMessage(msg : IMessage) : void{
    this._messages.push(msg)
    this._local.setItem(this._localKey, this._messages);
    this.obsLastestMessage.next(msg);
  }
}
