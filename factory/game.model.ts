export interface Game {
    name: string;
    icon: string;
    disabled: boolean
    getGameElement(): HTMLElement;
}