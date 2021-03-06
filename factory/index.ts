import { Games } from "./games.enum";
import {GameFactory} from './game.factory'
import {initialize} from "./decorators/initalize"
import './styles/styles.scss';


class App {
    gamesFactory:GameFactory
    constructor(gamesFactory:GameFactory) {
        this.gamesFactory = gamesFactory;
        this.init();        
    }
    @initialize
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

   // TODO: Zaimplementuj wzorzec fabryki/metody fabrykuj??cej, tak aby na podstawie konkretnej warto??ci z enum
   // zwr??ci?? obiekt gry. Z tego obiektu mo??na nast??pnie pobra?? nazw?? gry i doda?? do menu oraz metod?? zwracaj??c??
   // sam?? gr?? i po klikni??ciu w wybrany element listy wywo??ywa?? j??, aby dokleja?? zawarto???? do gameContainer. 
   // Aby wy??wietli?? menu nale??y napisa?? p??tl??, kt??ra przeiteruje po wszystkich warto??ciach enum'
            