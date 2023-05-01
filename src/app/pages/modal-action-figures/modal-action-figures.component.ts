import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-action-figures',
  templateUrl: './modal-action-figures.component.html',
  styleUrls: ['./modal-action-figures.component.scss']
})
export class ModalActionFiguresComponent {



  item: any;

  constructor(public modalController: ModalController, navParams: NavParams) {
    this.item = navParams.get('item');
  }

  // Função Fechar modal

  async closeModal() {
    await this.modalController.dismiss();
  }

}
