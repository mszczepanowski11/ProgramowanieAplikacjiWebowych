import { Game } from "../game.model";

export class TicTacToe implements Game {
    name: string;
    icon:string;

    constructor() {
        this.name = "TicTacToe"
        this.icon = '../icons/tic-tac-toe-2.png';
    }
    getGameElement(): HTMLElement {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello TicTacToe"));
        return div;
    }

}