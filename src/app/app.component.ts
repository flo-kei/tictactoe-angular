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
  results: string[][] = []

  constructor(public tictactoeService: TictactoeService) {
    this.numbers = tictactoeService.getNumberArr()

    for (var i = 0; i < 3; i++) {
      this.results[i] = [];
      for (var j = 0; j < 3; j++) {
        this.results[i][j] = ' ';
      }
    }
  }

  getNum(i: number, j: number): number {
    return this.tictactoeService.getIndex(i, j)
  }

  processGameResults(winner: string, i: number, j: number) {
    this.results[i][j] = winner
  }

  searchResults(player: string) {
    this.results.some(row => row.includes(player))

    let count = 0
    for(let i = 0; i < this.results.length;i++){
      for(let j = 0; j < this.results[i].length;j++){
        if(this.results[i][j] === player){
          count++
        }
      }
    }
    return count
  }
}
