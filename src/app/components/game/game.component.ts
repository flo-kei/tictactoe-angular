import { Component, Input, OnInit } from '@angular/core';
import { TictactoeService } from 'src/app/services/tictactoe.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() gameNumber: number = 0

  constructor(public tictactoeService: TictactoeService) { 
    this.numbers = tictactoeService.getNumberArr()
  }

  ngOnInit(): void {
    
  }

  result = ""
  numbers:number[] = []

  currentPlayer = 1
  
  field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]

  fieldClicked(row: number,col: number){
    if(this.field[row][col] === 0){
      this.field[row][col] = this.currentPlayer
      this.currentPlayer *= -1

      let winner = this.tictactoeService.checkIfWon(this.field)
      if(winner != 0){
        alert("Winner is: "+ winner)
      }
    }
  }

  getSymbol(input:number):string{
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
