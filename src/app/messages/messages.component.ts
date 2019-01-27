import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
	

  message: string = "Hola Mundo!"

  @Output() messageEvent = new EventEmitter<string>();

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  };

  sendMessage() {
    this.messageEvent.emit(this.message)
  };

}
