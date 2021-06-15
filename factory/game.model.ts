export interface Game {
    name: string;
    icon: string;
    getGameElement(): HTMLElement;
}