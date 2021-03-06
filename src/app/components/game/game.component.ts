import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TictactoeService } from 'src/app/services/tictactoe.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() gameNumber: number = 0

  @Output() gameEnded = new EventEmitter<string>(); //Event erstellen

  constructor(public tictactoeService: TictactoeService) {
    this.numbers = tictactoeService.getNumberArr()
  }

  ngOnInit(): void {
    if(this.gameNumber >= 4){
      this.currentPlayer = -1
    }
    if(this.gameNumber >= 7){
      let array = [-1,1]
      this.currentPlayer = array[Math.floor(Math.random() * array.length)]
    }
  }

  winner = ""
  result = ""
  numbers: number[] = []

  currentPlayer = 1

  field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

  fieldClicked(row: number, col: number) {
    if (this.field[row][col] === 0) {
      this.field[row][col] = this.currentPlayer
      this.currentPlayer *= -1

      let winnerNumber = this.tictactoeService.checkIfWon(this.field)
      if (winnerNumber !== 0) {
        switch (winnerNumber) {
          case -1:
            this.winner = "O"
            break;
          case 1:
            this.winner = "X"
            break;
        }
        if (this.winner === "") {
          this.result = "Unentschieden"
        }
        else {
          this.result = "Sieger: " + this.winner
        }
        this.gameEnded.emit(this.winner)
      }
    }
  }

  getSymbol(input: number): string {
    switch (input) {
      case 1:
        return "X";
      case -1:
        return "O";

      default:
        return "⠀";
    }
  }

}
