import {Board} from './board'

let input      = <HTMLInputElement>document.getElementById('board_size')
let table      = <HTMLTableElement>document.getElementById('tictactoe')
let playButton = <HTMLButtonElement>document.getElementById('playBtn')
let size


playButton.addEventListener('click', () =>{
    table.innerHTML = ' '
    size = parseInt(input.value)
    const board = new Board(size)
})
