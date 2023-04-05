

class CharacterScreen {

    displayCharacter() {
        
        setTimeout(function() {
            animations.characterScreen = true
            const nameInput = document.createElement("input")
            nameInput.className = "nameInput"
            nameInput.placeholder = "Enter your Name"
            nameInput.name = "name"

            const parent = document.querySelector("#canvas")
            const child = document.querySelector("#defaultCanvas0")

            parent.insertBefore(nameInput, child)

            const enterArena = document.createElement("button")
            enterArena.className = "enterArena"
            enterArena.name = "enter"
            enterArena.innerText = "Enter the arena!"

            parent.insertBefore(enterArena, child)

            game.characterScreen.enterArena()

        }, 0)


    }

    enterArena() {

        const enterArena = document.querySelector(".enterArena")
        console.log(enterArena)
        enterArena.addEventListener("click", () => {
            game.player.name = document.querySelector(".nameInput").value

            const nameInput = document.querySelector(".nameInput").remove()
            enterArena.remove()
            game.mainMenu.displayMenu()

            animations.characterScreen = false
            
            console.log(animations.attack.totalFrames())
            console.log(animations.idle.totalFrames())

        })
        
    }

}

