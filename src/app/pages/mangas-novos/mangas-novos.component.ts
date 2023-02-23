import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mangas-novos',
  templateUrl: './mangas-novos.component.html',
  styleUrls: ['./mangas-novos.component.scss']
})
export class MangasNovosComponent implements OnInit {

  lista = [  
    {src:'../../../assets/manga01.jpg', nome: 'Monkey D. Luffy',tamanho:'21', preco:'189,90' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
