import { Game } from "../game.model";
import {disabled} from '../decorator'
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
    getGameElement(): HTMLElement {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello TicTacToe"));
        return div;
    }

}