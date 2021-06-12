import { Games } from "./games.enum";
import {GameFactory} from './game.factory'
import './styles/styles.scss';


class App {
    gamesFactory:GameFactory
    constructor(gamesFactory:GameFactory) {
        this.gamesFactory = gamesFactory;
        this.init();        
    }

    init(): void {
        const menuContainer = <HTMLDivElement>(document.createElement('div')); 
        const gameContainer = <HTMLDivElement>(document.createElement('div')); 

        const list = document.createElement('ul'); 

        menuContainer.classList.add('menu')
        gameContainer.classList.add('game')

        for(const gameObject of Object.keys(Games)){
            if(isNaN(Number(gameObject))){
                continue
            }
            
            const game = this.gamesFactory.getGame(Number(gameObject))
            const item = document.createElement('li')

            item.appendChild(document.createTextNode(game.name))

            item.addEventListener('click' , () => {
                gameContainer.innerHTML = " "
                gameContainer.appendChild(game.getGameElement())
            })
            list.appendChild(item)

        }
        
        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
    }
}

let gamesFactory = new GameFactory
let app = new App(gamesFactory)

   // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
   // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
   // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer. 
   // Aby wyświetlić menu należy napisać pętlę, która przeiteruje po wszystkich wartościach enum'
            