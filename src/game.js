
class Game {

    constructor() {
        this.startScreen = new startScreen()
        this.player = new Player()
        this.characterScreen = new CharacterScreen()
        this.mainMenu = new MainMenu()
        this.fightScreen = new FightScreen()
        this.fight = new Fight()

    }

    preload() {

        console.log("preloading game")
        this.startScreen.startGame() 
    }
}