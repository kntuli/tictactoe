import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  
  //boardCells: any[]  = [
  //  { id: 0, item: '?' },
  //  { id: 1, item: '?' },
  //  { id: 2, item: '?' },
  //  { id: 3, item: '?' },
  //  { id: 4, item: '?' },
  //  { id: 5, item: '?' },
  //  { id: 6, item: '?' },
  //  { id: 7, item: '?' },
  //  { id: 8, item: '?' },
  //];

  cells: string[] = [];

  playerMove: string = 'X';
  computerMove: string = 'O';
  gameover = false;
  gameoverColor: string = 'black';
  winner = null;
  count = 0;
  A = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  set = new Set();

  ngOnInit() {
   // console.log("onInit");
    for (let i = 0; i < 9; i++) {
      this.cells[i] = "?";
    }
  }


  newGame() {
    for (let i = 0; i < 9; i++) {
      this.cells[i] = "?";
    }

    this.playerMove = "X";
    this.gameover = false;
    this.winner = null;
    this.count = 0;
  }

  shuffle(array: any[]) {
    let i = array.length;
    let j = 0;
    let temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  * shuffle2(array: any[]) {
    let i = array.length;
    while (i--) {
      yield array.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
    }
  }

  getRan() {
    let A = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let i = A.length;
    A.splice(Math.floor(Math.random() * (i + 1)), 1);
    //while (i--) {
    //  A.splice(Math.floor(Math.random() * (i + 1)), 1);
    //}
    return A;
  }

  onSelect(i: number) {
    //console.log(i);
    //let r = Math.floor(Math.random() * 9) + 1;

    //if (this.A.indexOf(r) > -1) {
    //  console.log(r);
    //}
   // let A = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    //let i = 0;
   // this.A.splice(i, 1);
    //let B = [];
    
    //const index = this.A.findIndex(x => x === parseInt(computerMoveI));
    ////let index = this.A.indexOf(parseInt(computerMoveI));
    ////B.push(computerMoveI)
    //this.set.add(computerMoveI);
    
    //console.log("size: " + this.set.size);
    ////console.log("set: " + this.set.values.);
    //console.log("index: " + index);
    //console.log("computerMoveI: " + computerMoveI);
    //console.log(this.A.splice(i, 1));
    // A.splice(index, 1);
    //if (index === -1 && this.A.length > 0) {
    //  console.log(computerMoveI);
    //}
    //A.push(j);

   //console.log(computerMoveI);
   // var min = 0;
   // var max = 9;
   //let array = [0,1,2,3,4,5,6,7,8];
   //let ranNums = this.shuffle2(array);
   //// var computerMoveI = (Math.random() * 8).toFixed();
    // console.log(ranNums.next().value);
    //console.log(computerMoveI);
    //var lastRandom;
    //var random;

    //if (lastRandom === undefined) {
    //  random = Math.floor(Math.random() * (max - min + 1)) + min;
    //}
    //else {
    //  random = Math.floor(Math.random() * (max - min)) + min;
    //  if (random >= lastRandom) random += 1;
    //}
    //lastRandom = random;
    //console.log(lastRandom);
    if (!this.gameover) {
      if (this.cells[i] === "?") {
        this.count++;
        this.cells[i] = this.playerMove;
        
        this.computerTurn();
        this.checkWinner();
      }
    }
  }

  computerTurn() {
    var taken = false;
    while (taken === false && this.count < 5) {
      //var computerMoveI = (Math.random() * 9).toFixed();
     // var computerMoveI = (Math.floor(Math.random() * (9-1+1)+1));
      var computerMoveI = Math.floor(Math.random() * 9) + 1;

      //console.log(computerMoveI);
      var move = this.cells[computerMoveI];
      //console.log(move);
      if (move === "?") {
        this.cells[computerMoveI] = this.computerMove;
        taken = true;
      }
    }
  }

  checkWinner() {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let line of lines) {
      if (this.cells[line[0]] === this.cells[line[1]] && this.cells[line[1]] === this.cells[line[2]] && this.cells[line[0]] !== "?") {
        this.gameover = true;
       // console.log('gameover');
        this.winner = "Game Over: The winner is " + this.cells[line[0]];
        if (this.cells[line[0]] === 'X') {
          this.gameoverColor = 'green';
        }

        if (this.cells[line[0]] === 'O') {
          this.gameoverColor = 'red';
        }

        return;
      }
    }

    let cellsOccupied = 0;
    
    this.cells.forEach((e) => { cellsOccupied += (e !== '?' ? 1 : 0) });
    console.log(cellsOccupied);
    if (cellsOccupied === 9) {
      this.gameover = true;
      this.winner = "Game Over: No winner, It's a tie";
      this.gameoverColor = 'black';
    }


  }

  playerColor(cell: string) {
    if (cell === 'X') {
      return 'green';
    }
    if (cell === 'O') {
      return 'red';
    }
    return 'white'

  }


}
