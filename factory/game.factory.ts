import { Game } from "./game.model"
import { Games } from "./games.enum"
import { Factory } from './factory.model'
import { TicTacToe } from './tictactoe/tictactoe'
import { BattleShips } from './battleships/battleships'


export class GameFactory implements Factory {
   getGame(game:Games) : Game {
        switch (game){
            case Games.TicTacToe:
                return new TicTacToe()
            case Games.BattleShips:
                return new BattleShips()
             default: 
                alert("There's no that type of game here!")   
        }
   }
}