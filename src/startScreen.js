
class startScreen {

    startGame() {
        const startButton = document.querySelector('#start-button');

        startButton.addEventListener("click", () => {
            document.querySelector(".start-screen").remove()
            document.querySelector("canvas").className = "background-animation"
        
            game.characterScreen.displayCharacter()

            game.backgroundMusic.play()
            game.backgroundMusic.setVolume(0.3)

        })
    }
    
}

