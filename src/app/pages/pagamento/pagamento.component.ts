import { Component } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: [
    './pagamento.component.scss',
    './pagamento-resposividade.component.scss',
    './pagamento-meios.component.scss'
  ]
})
export class PagamentoComponent {

  //Função de voltar e avançar conteúdo
  currentSection = 1;

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
}
