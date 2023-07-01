import { Component, OnInit } from '@angular/core';
import { MessageService} from './message.service';
@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: [
    './pagamento.component.scss',
    './pagamento-resposividade.component.scss',
    './pagamento-meios.component.scss'
  ]
})
export class PagamentoComponent implements OnInit{

  constructor(private messageService: MessageService){
  }

  messages: string[] = [];
  //Função de voltar e avançar conteúdo
  currentSection = 1;

  ngOnInit() {
    this.messages = this.messageService.getMessages();
  }

  nextSection(){
    if(this.currentSection < 3){
      this.currentSection++;
    }
  }

  backSection(){
    if(this.currentSection > 1){
      this.currentSection--;
    }
  }

  onCopySuccess() {
    console.log('Pix copiado com sucesso!');
  }

  exibirMensagem() {
    const mensagem = 'Copiado para a área de transferência!';
    this.messageService.add(mensagem);
  }
}
