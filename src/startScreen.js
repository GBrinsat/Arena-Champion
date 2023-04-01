class startScreen {

    startGame() {
        const startButton = document.querySelector('#start-button');
        const headline = document.querySelector("h1")
        const instructions = document.querySelector("p")

        startButton.addEventListener("click", () => {
            startButton.style.display = "none"
            headline.style.display = "none"
            instructions.style.display = "none"
            document.querySelector("canvas").className = "background-animation"

            this.transitionToCharacter()
            
        })
    }
    
    transitionToCharacter() {

        test()

    }
}

function test() {
    console.log("test works")
}

