
class MainMenu {

    constructor() {
        this.stageOneSelected = false
        this.stageTwoSelected = false
        this.stageThreeSelected = false
        this.stageFourSelected = false

        this.fightSelectContainer
    }

    displayMenu() {

        //create new Elements to display

        const characterBox = document.createElement("div")
        const menu = document.createElement("div")

        menu.className = "menu"
        characterBox.className = "characterBox"

        characterBox.innerHTML = "<div class='characterDisplay'></div><div class ='characterStats'><span id='name'></span><span id='level'>Level:</span><span id='rank'>Rank: Rookie</span><br><span id='hp'>HP: </span><span id='mana'>Mana: </span><span id='strength'>Strength: </span><span id='intelligence'>Intelligence: </span><span id='gold'>Gold: </span></div>"
        menu.innerHTML = "<span id='selectFight'>Start Combat</span><span id='shop'>Enter Shop</span>"

        const parent = document.querySelector("#canvas")
        const child = document.querySelector("#defaultCanvas0")

        parent.insertBefore(characterBox, child)
        parent.insertBefore(menu, child)

        //add event Listeners

        const selectFight = document.querySelector("#selectFight")
        const shop = document.querySelector("#shop")

        selectFight.addEventListener("mouseover", () => {
               selectFight.style.color = "red"
            })
        selectFight.addEventListener("mouseout", () => {
                selectFight.style.color = "black"
            })

        shop.addEventListener("mouseover", () => {
                shop.style.color = "red"
             })
        shop.addEventListener("mouseout", () => {
                shop.style.color = "black"
            })

        selectFight.addEventListener("click", () => {
            if(selectFight.style.color = "red") {
                this.displayFightSelect()
                animations.playerIdle = false
              }
           })

        shop.addEventListener("click", () => {
            if(shop.style.color = "red") {
               console.log("transfer to shop")
            }
           })

        //add display values
        console.log(document.querySelector("#name"))
        document.querySelector("#name").innerText = "Name: " + game.player.name
        document.querySelector("#level").innerText = "Level: " + game.player.level
        document.querySelector("#rank").innerText = "Rank: " + game.player.rank
        document.querySelector("#hp").innerText = "HP: " + game.player.hp
        document.querySelector("#mana").innerText = "Mana: " + game.player.mana
        document.querySelector("#strength").innerText = "Strength: " + game.player.str
        document.querySelector("#intelligence").innerText = "Intelligence: " + game.player.int
        document.querySelector("#gold").innerText = "Gold: " + game.player.gold
    }

    displayFightSelect() {

        //create new Elements to display

        document.querySelector(".characterBox").style.display = "none"
        document.querySelector(".menu").style.display = "none"

        this.fightSelectContainer = document.createElement("div")
        this.fightSelectContainer.className = "fightSelectContainer"

        this.fightSelectContainer.innerHTML = "<div class='fightSelect'><span id='stageOne'>1 : Eyesore</span><span id='stageTwo'>2 : The Terrible Twins</span><span id='stageThree'>3 : Death and Pestilence</span><span id='stageFour'>4 : The Ancient One</span></div><div class='startFight'><span id='startFight'>Start Fight</span></div>"

        const parent = document.querySelector("#canvas")
        const child = document.querySelector("#defaultCanvas0")

        parent.insertBefore(this.fightSelectContainer, child)

        //add event listeners

        const stageOne = document.querySelector("#stageOne")
        const stageTwo = document.querySelector("#stageTwo")
        const stageThree = document.querySelector("#stageThree")
        const stageFour = document.querySelector("#stageFour")
        const startFight = document.querySelector("#startFight")

        const stageArray = [stageOne, stageTwo, stageThree, stageFour, startFight]

        stageArray.forEach((element) => {

            element.addEventListener("mouseover", () => {
                element.style.color = "red"
             })
             element.addEventListener("mouseout", () => {
                element.style.color = "black"
             })
        })

        stageOne.addEventListener("click", () => {
            if(stageOne.style.color === "red"){
                this.stageOneSelected = true
                this.stageTwoSelected = false
                this.stageThreeSelected = false
                this.stageFourSelected = false
                stageOne.style.textDecoration = "underline"
                stageTwo.style.textDecoration = "none"
                stageThree.style.textDecoration = "none"
                stageFour.style.textDecoration = "none"
            }
        })

        stageTwo.addEventListener("click", () => {
            if(stageTwo.style.color === "red"){
                this.stageOneSelected = false
                this.stageTwoSelected = true
                this.stageThreeSelected = false
                this.stageFourSelected = false
                stageOne.style.textDecoration = "none"
                stageTwo.style.textDecoration = "underline"
                stageThree.style.textDecoration = "none"
                stageFour.style.textDecoration = "none"
            }
        })

        stageThree.addEventListener("click", () => {
            if(stageThree.style.color === "red"){
                this.stageOneSelected = false
                this.stageTwoSelected = false
                this.stageThreeSelected = true
                this.stageFourSelected = false
                stageOne.style.textDecoration = "none"
                stageTwo.style.textDecoration = "none"
                stageThree.style.textDecoration = "underline"
                stageFour.style.textDecoration = "none"
            }
        })

        stageFour.addEventListener("click", () => {
            if(stageFour.style.color === "red"){
                this.stageOneSelected = false
                this.stageTwoSelected = false
                this.stageThreeSelected = false
                this.stageFourSelected = true
                stageOne.style.textDecoration = "none"
                stageTwo.style.textDecoration = "none"
                stageThree.style.textDecoration = "none"
                stageFour.style.textDecoration = "underline"
            }
        })

        //transfer to fight screen

        startFight.addEventListener("click", () => {
            if(startFight.style.color === "red"){

                animations.playerIdle = true

                if(game.fightScreen.characterDisplayBox === undefined) {
                    game.fightScreen.displayFightScreen()
                    game.fightScreen.createEnemySelector()
                    game.fightScreen.createMessageDisplay()
                    game.fightScreen.createEnemyMessageDisplay()
                    this.fightSelectContainer.remove()

                    if(this.stageOneSelected === true){
                        game.fight.generateFightOne()
                        console.log("transfer to fight screen one")
                    }
                    else if(this.stageTwoSelected === true){
                        game.fight.generateFightTwo()
                        console.log("transfer to fight screen two")
                    }
                    else if(this.stageThreeSelected === true){
                        game.fight.generateFightThree()
                        console.log("transfer to fight screen three")
                    }
                    else if(this.stageFourSelected === true){
                        game.fight.generateFightFour()
                        console.log("transfer to fight screen four")
                        game.backgroundMusic.pause()
                        game.bossMusic.play()
                        game.bossMusic.setVolume(0.5)
                    }
                    
                }
                else {
                    game.fightScreen.characterDisplayBox.style.display = "flex"
                    game.fightScreen.fightContainer.style.display = "flex"
                    this.fightSelectContainer.remove()
                    if(this.stageOneSelected === true){
                        game.fight.generateFightOne()
                        console.log("transfer to fight screen one")
                        this.stageOneSelected = false
                    }
                    else if(this.stageTwoSelected === true){
                        game.fight.generateFightTwo()
                        console.log("transfer to fight screen two")
                        this.stageTwoSelected = false
                    }
                    else if(this.stageThreeSelected === true){
                        game.fight.generateFightThree()
                        console.log("transfer to fight screen three")
                        this.stageThreeSelected = false
                    }
                    else if(this.stageFourSelected === true){
                        game.fight.generateFightFour()
                        console.log("transfer to fight screen four")
                        this.stageFourSelected = false
                    }
                }
                
               
            }
        })

    }
}