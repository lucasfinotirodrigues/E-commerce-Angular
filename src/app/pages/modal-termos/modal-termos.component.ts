import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-termos',
  templateUrl: './modal-termos.component.html',
  styleUrls: ['./modal-termos.component.scss']
})
export class ModalTermosComponent {

  
  constructor(public modalController: ModalController) {}
  // Função Fechar modal

  async closeModal() {
    await this.modalController.dismiss();
  }

}
