
class Game {

    constructor() {
        this.startScreen = new startScreen()
        this.player = new Player()
        this.characterScreen = new CharacterScreen()
        this.mainMenu = new MainMenu()
    }

    preload() {

        console.log("preloading game")
        this.startScreen.startGame() 
    }
}