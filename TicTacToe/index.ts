let currentPlayer = 'X'
let gameRunning: boolean = true
export class Cell {
   cellValue: number
   htmlELement: HTMLElement

   constructor(cell: HTMLElement) {
      this.htmlELement = cell
      this.cellValue = 0
   }

   setCellValue(value: number) {
      const PlayerX: HTMLImageElement = new Image(50)
      const PlayerO: HTMLImageElement = new Image(50)

      PlayerX.src = 'x_sign.png'
      PlayerO.src = 'o_sign.png'

      PlayerX.classList.add('img')
      PlayerO.classList.add('img')

      if (value == 1 && this.cellValue == 0) {
         this.htmlELement.appendChild(PlayerX)
      } else if (value == -1 && this.cellValue == 0) {
         this.htmlELement.appendChild(PlayerO)
      }
   }
}

export class Board {
   cells: Cell[]
   currentSymbol: number

   constructor(size: number) {
      this.cells = new Array(size)
      this.currentSymbol = 1

      let table = <HTMLTableElement>document.getElementById("tictactoe")
      let i = 0;
      for (let r = 0; r < size; r++) {
         let row = table.insertRow(r)
         for (let c = 0; c < size; c++) {
            let cell = <HTMLTableDataCellElement>row.insertCell(c)
            cell.className = 'cell'
            const newCell = new Cell(cell)
            this.cells[i] = newCell

            gameRunning ?
               cell.addEventListener("click", () =>
                  this.makeMove(newCell), true)
               :
               cell.removeEventListener("click", () =>
                  this.makeMove(newCell), false)
            i++
         }
      }
   }

   boardIsFull():boolean{
      for(let i = 0; i < this.cells.length;i++){
         if (this.cells[i].cellValue == 0)
            return false
      }
      return true
   }

   makeMove(cell: Cell): void {

      currentPlayer = this.currentSymbol === 1 ? 'X' : 'O'
      const statusDisplay = <HTMLElement>document.querySelector('.game-status')
      cell.setCellValue(this.currentSymbol)

      if (cell.cellValue == 0) {
         if (this.currentSymbol == 1) {
            cell.cellValue = -1
            this.currentSymbol = -1
            statusDisplay.innerHTML = 'Turn:O'

         } else if (this.currentSymbol == -1) {
            cell.cellValue = 1
            this.currentSymbol = 1
            statusDisplay.innerHTML = 'Turn:X'
         }
      }

      //DRAW
      if (this.boardIsFull()) {
         console.log(this.boardIsFull())
         statusDisplay.innerHTML = 'Draw!';
     }

      //HORIZONTALLY
      if (this.cells[0].cellValue != 0 && this.cells[0].cellValue == this.cells[1].cellValue && this.cells[1].cellValue == this.cells[2].cellValue) {
         statusDisplay.innerHTML = `${currentPlayer} has won!`
         gameRunning = false
      }
      if (this.cells[3].cellValue != 0 && this.cells[3].cellValue == this.cells[4].cellValue && this.cells[4].cellValue == this.cells[5].cellValue) {
         statusDisplay.innerHTML = `${currentPlayer} has won!`
         gameRunning = false
      }
      if (this.cells[6].cellValue != 0 && this.cells[6].cellValue == this.cells[7].cellValue && this.cells[7].cellValue == this.cells[8].cellValue) {
         statusDisplay.innerHTML = `${currentPlayer} has won!`
         gameRunning = false
      }


      //VERTICALLY
      if (this.cells[0].cellValue != 0 && this.cells[0].cellValue == this.cells[3].cellValue && this.cells[3].cellValue == this.cells[6].cellValue) {
         statusDisplay.innerHTML = `${currentPlayer} has won!`
         gameRunning = false
      }
      if (this.cells[1].cellValue != 0 && this.cells[1].cellValue == this.cells[4].cellValue && this.cells[4].cellValue == this.cells[7].cellValue) {
         statusDisplay.innerHTML = `${currentPlayer} has won!`
         gameRunning = false
      }
      if (this.cells[2].cellValue != 0 && this.cells[2].cellValue == this.cells[5].cellValue && this.cells[5].cellValue == this.cells[8].cellValue) {
         statusDisplay.innerHTML = `${currentPlayer} has won!`
         gameRunning = false
      }


      //DIAGONALLY
      if (this.cells[0].cellValue != 0 && this.cells[0].cellValue == this.cells[4].cellValue && this.cells[4].cellValue == this.cells[8].cellValue) {
         statusDisplay.innerHTML = `${currentPlayer} has won!`
         gameRunning = false
      }
      if (this.cells[2].cellValue != 0 && this.cells[2].cellValue == this.cells[4].cellValue && this.cells[4].cellValue == this.cells[6].cellValue) {
         statusDisplay.innerHTML = `${currentPlayer} has won!`
         gameRunning = false
      }
      
   }
}

const board = new Board(3)