import { Game } from "../game.model";
import {logger} from '../decorators/logger'
export class BattleShips implements Game {
    name: string;
    icon: string;
    disabled: boolean

    constructor() {
        this.name = "Battleship"
        this.icon = '../icons/battleship.png'
        this.disabled = true
    }
    @logger('Battleships')
    getGameElement(): HTMLElement {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode("Hello BattleShips"));
        return div;
    }

}