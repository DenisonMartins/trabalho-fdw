import {Component} from '@angular/core';
import {Aluno} from "./model/aluno";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alunos: Array<Aluno>;

  constructor() {
    this.alunos = [
      {
        name: 'Michael Martins', ru: '3288341', curso: 'Analise e Desenvolvimento', dataNascimento: '22/08/1988'
      },
      {
        name: 'Raphael Martins', ru: '1730713', curso: 'Educação Física', dataNascimento: '21/09/1993'
      },
      {
        name: 'Ana Laura', ru: '0051548', curso: 'Enfermage', dataNascimento: '11/08/1970'
      },
      {
        name: 'Valéria Martins', ru: '0149119', curso: 'Educação Física', dataNascimento: '28/04/1990'
      },
      {
        name: 'João Alberto', ru: '7099197', curso: 'Medicina', dataNascimento: '15/04/1988'
      }
    ]
  }
}
