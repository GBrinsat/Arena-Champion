
class startScreen {

    startGame() {
        const startButton = document.querySelector('#start-button');

        startButton.addEventListener("click", () => {
            document.querySelector(".start-screen").remove()
            document.querySelector("canvas").className = "background-animation"
        
            game.characterScreen.displayCharacter()

            /* setTimeout(function() {
                isClicked = true
                const nameInput = document.createElement("input")
                nameInput.className = "nameInput"
                nameInput.placeholder = "Enter your Name"
                nameInput.name = "name"
                document.querySelector("div").appendChild(nameInput)
                const enterArena = document.createElement("button")
                enterArena.className = "enterArena"
                enterArena.name = "enter"
                enterArena.innerText = "Enter the arena!"
                document.querySelector("div").appendChild(enterArena)
            }, 7000) */

        })
    }
    
}

