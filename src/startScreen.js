
class startScreen {

    startGame() {
        
        const startScreen = document.createElement("div")
        startScreen.className = "start-screen"

        startScreen.innerHTML = "<h1>Arena Champion</h1><p>Use your mouse to navigate the menus. Defeat all enemies to become the Arena Champion!</p><button id='start-button' class='start-button' name='start'>Start Game</button>"

        const parent = document.querySelector("body")
        const child = document.querySelector("#canvas")

        parent.insertBefore(startScreen, child)

        const startButton = document.querySelector('#start-button');
        console.log(startButton)

        startButton.addEventListener("click", () => {
            document.querySelector(".start-screen").remove()
            document.querySelector("canvas").className = "background-animation"
        
            game.characterScreen.displayCharacter()

            game.backgroundMusic.play()
            game.backgroundMusic.setVolume(0.3)

        })
    }
    
}

