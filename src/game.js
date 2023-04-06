
class Game {

    constructor() {
        this.startScreen = new startScreen()
        this.player = new Player()
        this.characterScreen = new CharacterScreen()
        this.mainMenu = new MainMenu()
        this.fightScreen = new FightScreen()
        this.fight = new Fight()
        this.backgroundMusic
        this.bossMusic
        this.attackSound
        this.magicSound
        this.cheer

    }

    preload() {
        this.backgroundMusic = loadSound("assets/music/battle-of-the-dragons-8037.mp3")
        this.bossMusic = loadSound("assets/music/BossFight.mp3")
        this.attackSound = loadSound("assets/music/Swordattack.mp3")
        this.magicSound = loadSound("assets/music/Magic.wav")
        this.cheer = loadSound("assets/music/Arena-crowd-cheer-sound-effect.mp3")
    }
}