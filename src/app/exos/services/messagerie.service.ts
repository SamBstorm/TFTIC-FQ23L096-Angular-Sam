import { Injectable } from '@angular/core';
import { IMessage } from '../models/imessage';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagerieService {

  private _messages : IMessage[] = [
    {
      sender : 'prof', 
      message : 'Bonjour à tous, nous allons débuter le cours', 
      date : new Date(2024,1,29,9,0,0)
    },
    {
      sender : 'Élèves',
      message : 'Bonjour, le temps de démarrer la VM et nous sommes là!',
      date : new Date(2024,1,29,9,1,0)
    }
  ];

  public obsLastestMessage : Subject<IMessage> = new Subject<IMessage>();

  constructor() { }

  public getAll() : IMessage[]{
    return [...this._messages];
  }

  public addMessage(msg : IMessage) : void{
    this._messages.push(msg)
    this.obsLastestMessage.next(msg);
  }
}
