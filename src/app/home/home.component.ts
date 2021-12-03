import { Component, OnInit } from '@angular/core';
import { Dicas } from './Dicas.modele';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dicas: Dicas[] = [
    {
      id: 1,
      titulo: 'Cuidado com informações pessoais',
      imagem: 'https://i.imgur.com/iBVBNu5.png',
      descricao: 'Uma das maiores artistas da cena drag queen do brasil!',

    },
    {
      id: 2,
      titulo: 'Mantenha seus contatos atualizados',
      imagem: 'https://i.imgur.com/jq5WNAW.png',
      descricao: 'Uma das maiores artistas da cena drag queen do brasil!'
    },
    {
      id: 3,
      titulo: 'Verifique os erros ortográficos',
      imagem: 'https://i.imgur.com/xZvVOmw.png',
      descricao: 'Uma das maiores artistas da cena drag queen do brasil!'
    },
    {
      id: 4,
      titulo: 'Especifique sua área de atuação',
      imagem: 'https://i.imgur.com/3oEjMZC.png',
      descricao: 'Uma das maiores artistas da cena drag queen do brasil!'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
