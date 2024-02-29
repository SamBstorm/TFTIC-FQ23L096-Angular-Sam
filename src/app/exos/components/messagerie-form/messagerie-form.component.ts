import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMessage } from '../../models/imessage';
import { MessagerieService } from '../../services/messagerie.service';

@Component({
  selector: 'app-messagerie-form',
  templateUrl: './messagerie-form.component.html',
  styleUrl: './messagerie-form.component.scss'
})
export class MessagerieFormComponent implements OnInit {
  
  msgForm! : FormGroup;

  constructor(
    private _fb : FormBuilder,
    private _msgService : MessagerieService
    ){}
  
  ngOnInit(): void {
    this.msgForm = this._fb.group({
      sender : [null , [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],
      message : [null, [Validators.required, Validators.minLength(1), Validators.maxLength(1024)]]
    });
  }

  public onSubmit() : void {
    if(!this.msgForm.valid) return;
    let msg : IMessage = {
      sender : this.msgForm.value.sender,
      message : this.msgForm.value.message,
      date : new Date()
    };
    this._msgService.addMessage(msg);
    this.msgForm.reset();
  }

}
