import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roupas-masculinas',
  templateUrl: './roupas-masculinas.component.html',
  styleUrls: ['./roupas-masculinas.component.scss']
})
export class RoupasMasculinasComponent implements OnInit {

  constructor() { }


  lista = [

    {src:'../../../assets/cm01.jpg', nome: 'Camiseta Kaido',preco:'79,90' },
    
    {src:'../../../assets/cm02.jpg', nome: 'Camiseta Katakuri',preco:'79,90' },

  ]
  ngOnInit(): void {
  }

}
