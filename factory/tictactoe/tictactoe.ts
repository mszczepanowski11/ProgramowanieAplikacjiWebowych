import { Game } from "../game.model";
import {disabled} from '../decorators/decorator'
import {logger} from '../decorators/logger'
@disabled
export class TicTacToe implements Game {
    name: string;
    icon:string;
    disabled:boolean;

    constructor() {
        this.name = "TicTacToe"
        this.icon = '../icons/tic-tac-toe-2.png'
        this.disabled = true
    }
    @logger('Tic Tac Toe')
    getGameElement(): HTMLElement {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello TicTacToe"));
        return div;
    }

}