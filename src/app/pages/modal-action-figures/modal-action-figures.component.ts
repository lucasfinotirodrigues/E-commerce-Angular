import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-action-figures',
  templateUrl: './modal-action-figures.component.html',
  styleUrls: ['./modal-action-figures.component.scss']
})
export class ModalActionFiguresComponent {


  constructor(public modalController: ModalController) {}
  // Função Fechar modal

  async closeModal() {
    await this.modalController.dismiss();
  }

}
