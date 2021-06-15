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

        const menuContainer = <HTMLDivElement>(document.createElement('div')) 
        const gameContainer = <HTMLDivElement>(document.createElement('div'))
        const themeBtn      = <HTMLButtonElement>(document.createElement('button'))

        const list = document.createElement('ul')

        themeBtn.innerHTML = 'Switch theme'
        themeBtn.classList.add('theme-button')
        menuContainer.classList.add('menu')
        gameContainer.classList.add('game')

        for(const gameObject of Object.keys(Games)){
            if(isNaN(Number(gameObject))){
                continue
            }
            
            const game = this.gamesFactory.getGame(Number(gameObject))

            if(game.disabled){
                const icon = document.createElement('img')
                icon.classList.add('icon')
                const item = document.createElement('li')
                icon.src = game.icon
                item.appendChild(document.createTextNode(game.name))
                item.appendChild(icon)

                item.addEventListener('click' , () => {
                    gameContainer.innerHTML = " "
                    gameContainer.appendChild(game.getGameElement())
                })
            
                 list.appendChild(item)
        }
    }

        const setTheme = (themeName) => {
            localStorage.setItem('theme', themeName);
            document.documentElement.className = themeName;
        }

        const toggleTheme = () => {
            if(localStorage.getItem('theme') === 'theme-dark')
                setTheme('theme-light')
            else
                setTheme('theme-dark')    
        }

        themeBtn.addEventListener('click',() => {
            toggleTheme();
        })
        menuContainer.appendChild(list);
        document.body.appendChild(menuContainer);
        document.body.appendChild(gameContainer);
        document.body.appendChild(themeBtn);
    }
}

let gamesFactory = new GameFactory
let app = new App(gamesFactory)

   // TODO: Zaimplementuj wzorzec fabryki/metody fabrykującej, tak aby na podstawie konkretnej wartości z enum
   // zwrócić obiekt gry. Z tego obiektu można następnie pobrać nazwę gry i dodać do menu oraz metodę zwracającą
   // samą grę i po kliknięciu w wybrany element listy wywoływać ją, aby doklejać zawartość do gameContainer. 
   // Aby wyświetlić menu należy napisać pętlę, która przeiteruje po wszystkich wartościach enum'
            