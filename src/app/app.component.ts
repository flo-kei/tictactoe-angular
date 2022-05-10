import { Component } from '@angular/core';
import { TictactoeService } from './services/tictactoe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tictactoe';
  number = 3
  numbers: number[] = []

  constructor(public tictactoeService: TictactoeService) {
    this.numbers = tictactoeService.getNumberArr()
  }

  getNum(i: number, j: number): number {
    return this.tictactoeService.getIndex(i, j)
  }
}
