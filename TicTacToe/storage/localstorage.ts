import {Cell} from '../scripts/cell'

export class LocalStorageStore {
    public saveGame(cells:Cell[]){
        localStorage.setItem('loadGame',JSON.stringify(cells))
    }   
    public loadGame():Cell[]{
        let game = <string>localStorage.getItem('loadGame')
        let loadGame = JSON.parse(game)
        return loadGame
    }
}
