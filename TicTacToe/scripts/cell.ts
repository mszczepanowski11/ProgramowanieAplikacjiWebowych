
export class Cell {
    cellValue: number
    htmlELement: HTMLElement
 
    constructor(cell: HTMLElement) {
       this.htmlELement = cell
       this.cellValue = 0
    }
 
    setCellValue(value: number) {
       const PlayerX: HTMLImageElement = new Image(50)
       const PlayerO: HTMLImageElement = new Image(50)
 
       PlayerX.src = 'x_sign.png'
       PlayerO.src = 'o_sign.png'
 
       PlayerX.classList.add('img')
       PlayerO.classList.add('img')
  
       if (value == 1 && this.cellValue == 0) {
          this.htmlELement.appendChild(PlayerX)
       } else if (value == -1 && this.cellValue == 0) {
          this.htmlELement.appendChild(PlayerO)
       }
    }
 }