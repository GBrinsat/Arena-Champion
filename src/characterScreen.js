

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

            const enterArena = document.createElement("span")
            enterArena.className = "enterArena"
            enterArena.innerText = "Enter the arena!"
            
            enterArena.addEventListener("mouseover", () => {
                enterArena.style.color = "red"
             })
            enterArena.addEventListener("mouseout", () => {
                enterArena.style.color = "black"
             })
            enterArena.addEventListener("click", () => {
                game.player.name = document.querySelector(".nameInput").value
                enterArena.remove()
                document.querySelector(".nameInput").remove()
                game.mainMenu.displayMenu()

                animations.characterScreen = false
             })

            parent.insertBefore(enterArena, child)

            game.backgroundMusic.play()
            game.backgroundMusic.setVolume(0.3)

        }, 7000)


    }

}

