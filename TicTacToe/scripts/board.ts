import {Cell} from './cell'
import {LocalStorageStore} from '../storage/localstorage'

let currentPlayer = 'X'
let gameRunning: boolean = true

export class Board {
   cells: Cell[]
   currentSymbol: number
   storage: LocalStorageStore

   constructor(size: number) {

      this.cells = new Array(size)
      this.storage = new LocalStorageStore()
      this.currentSymbol = 1
      this.loadGame()

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

   loadGame():void {
      const div        = <HTMLInputElement>(document.createElement('div'))
      const loadButton = <HTMLButtonElement>(document.createElement('button'))
      loadButton.textContent = 'Load'

      loadButton.addEventListener('click',() => {
         let loadedBoard = new Board(0)
         let cellValues = <string>localStorage.getItem('loadGame')
         let lastGame:Array<Cell> =   JSON.parse(cellValues)

         loadedBoard.cells = lastGame

         for(let i=0; i < lastGame.length; i++){
            const el = lastGame[i]
            el.setCellValue(1)
         }
      })

      div.appendChild(loadButton);
      document.body.appendChild(div);
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

      this.storage.saveGame(this.cells)

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

