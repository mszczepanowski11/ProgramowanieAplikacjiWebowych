import { Game } from "../game.model";

export class BattleShips implements Game {
    name: string;
    icon: string;

    constructor() {
        this.name = "Battleship"
        this.icon = '../icons/battleship.png'
    }
    getGameElement(): HTMLElement {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello BattleShips"));
        return div;
    }

}