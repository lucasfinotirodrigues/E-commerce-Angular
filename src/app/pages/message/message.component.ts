import { Component } from '@angular/core';
import { MessageService } from '../pagamento/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  messages: string[] = [];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }

  clearMessages() {
    this.messageService.clear();
    this.messages = [];
  }
}
