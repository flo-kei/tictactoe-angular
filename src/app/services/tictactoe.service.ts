import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TictactoeService {

  constructor() { }

  private readonly dim = 3

  getIndex(iNput: number, jNput: number): number {
    let idx = 0

    for (let i = 0; i < this.dim; i++) {
      for (let j = 0; j < this.dim; j++) {
        idx++
        if (i == iNput && j == jNput) {
          return idx
        }
      }
    }
    return -1
  }

  getNumberArr(): number[] {
    return Array(3).fill(0).map((x, i) => i);
  }

  checkIfWon(arr: number[][]) {
    let count = 0
    let routine = 0

    // check all directions
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        let val = 0
        switch (routine) {
          case 0:
            val = arr[i][j]
            break;
          case 1:
            val = arr[j][i]
            break;
          case 2:
            val = arr[j][j]
            break;
          case 3:
            val = arr[2 - j][j]
            break;
          default:
            return 0
        }

        if ((count > 0 && val < 0) || (count < 0 && val > 0)) {
          count = 0
        }

        count += val

        if (Math.abs(count) == 3) {
          return count > 0 ? 1 : -1
        }

        if (i == 2 && j == 2 && routine < 3) {
          routine++
          count = 0
          i = -1
          break;
        }
      }
      count = 0
    }
    return 0
  }
}
