class Game {

    constructor() {
        this.startScreen = new startScreen()
        this.player = new Player()
        this.character = new CharacterScreen()
    }

    preload() {

        console.log("preloading game")
        this.startScreen.startGame() 
    }

    draw() {
        clear()
        //console.log("gameDraw")
        this.player.draw()
        this.character.displayCharacter()
        
        //rect(387, 170, 250, 185)
    }
}