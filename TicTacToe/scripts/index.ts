import {Board} from './board'
import '../styles.scss'

let input      = <HTMLInputElement>document.getElementById('board_size')
let table      = <HTMLTableElement>document.getElementById('tictactoe')
let playButton = <HTMLButtonElement>document.getElementById('playBtn')
let size


playButton.addEventListener('click', () =>{
    table.innerHTML = ' '
    size = parseInt(input.value)
    const board = new Board(size)
    table.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px";
})
