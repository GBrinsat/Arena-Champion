
class FightScreen {

    constructor() {
        this.attackType
        this.surrender = false

        this.characterDisplayBox
        this.messageDisplay
        this.fightContainer
        this.enemyMessageDisplay
        this.burningDisplay
    }
    
    displayFightScreen() {
       
        document.querySelector(".fightSelectContainer").style.display = "none"

        //create new elements

        this.fightContainer = document.createElement("div")
        this.fightContainer.className = "fightContainer"

        this.fightContainer.innerHTML = "<div class='options'><span id='attack'>Attack</span><span id='magic'>Magic</span><span id='dodge'>Dodge</span><span id='surrender'>Surrender</span></div><div class='statusField'><span id='nameFight'>Name</span><span id='hpFight'>HP: </span><span id='manaFight'>Mana: </span></div"

        this.characterDisplayBox = document.createElement("div")
        this.characterDisplayBox.className = "characterDisplayBox"

        this.characterDisplayBox.innerHTML = "<div class='playerDisplay'></div><div class='enemyDisplayOne'></div><div class='enemyDisplayTwo'></div>"

        const parent = document.querySelector("#canvas")
        const child = document.querySelector("#defaultCanvas0")

        parent.insertBefore(this.fightContainer, child)
        parent.insertBefore(this.characterDisplayBox, child)

        document.querySelector("#nameFight").innerText = "Name: " + game.player.name
        document.querySelector("#hpFight").innerText = "HP: " + game.player.hp + " / " + game.player.hpMax
        document.querySelector("#manaFight").innerText = "Mana: " + game.player.mana + " / " + game.player.manaMax
    
        //add event listeners

        const attack = document.querySelector("#attack")
        const magic = document.querySelector("#magic")
        const dodge = document.querySelector("#dodge")
        const surrender = document.querySelector("#surrender")

        const optionsArray = [attack, magic, dodge, surrender]

        optionsArray.forEach((element) => {

            element.addEventListener("mouseover", () => {
                element.style.color = "red"
             })
             element.addEventListener("mouseout", () => {
                element.style.color = "black"
             })
        })

        attack.addEventListener("click", () => {
            if(attack.style.color === "red"){
                this.attackType = "attack"
                document.querySelector(".enemySelector").style.display = "flex"
            }
        })

        magic.addEventListener("click", () => {
            if(magic.style.color === "red"){
                this.attackType = "magic"
                document.querySelector(".enemySelector").style.display = "flex"
            }
        })

        dodge.addEventListener("click", () => {
            if(dodge.style.color === "red"){
                animations.playerIdle = false
                animations.playerDodge = true
                game.player.isDodging = true
                this.messageDisplay.style.display = "flex"
                document.querySelector("#message").innerText = "You prepare to dodge the enemies attacks!"
                game.fight.round += 1
            }
        })

        surrender.addEventListener("click", () => {
            if(surrender.style.color === "red"){
               this.messageDisplay.style.display = "flex"
               document.querySelector("#message").innerText = "You give up and return to the barracks..."
               this.surrender = true
            }
        })
    }

    createEnemySelector() {

        //create new elements

        const enemySelector = document.createElement("div")
        enemySelector.className = "enemySelector"

        enemySelector.innerHTML = "<span id='selectorOne'>Enemy one</span><span id='selectorTwo'></span>"

        const parent = document.querySelector("#canvas")
        const child = document.querySelector("#defaultCanvas0")

        parent.insertBefore(enemySelector, child)

        enemySelector.style.display = "none"

        //add event selectors

        const selectorOne = document.querySelector("#selectorOne")

        selectorOne.addEventListener("mouseover", () => {
            selectorOne.style.color = "red"
         })
         selectorOne.addEventListener("mouseout", () => {
            selectorOne.style.color = "black"
         })
         selectorOne.addEventListener("click", () => {
            if(this.attackType === "attack") {
                game.player.attack(game.fight.enemyOne)
            }
            else if(this.attackType === "magic") {
                game.player.magic(game.fight.enemyOne)
            }
            enemySelector.style.display = "none"
         })

        const selectorTwo = document.querySelector("#selectorTwo")
        
        selectorTwo.addEventListener("mouseover", () => {
            selectorTwo.style.color = "red"
         })
         selectorTwo.addEventListener("mouseout", () => {
            selectorTwo.style.color = "black"
         })
         selectorTwo.addEventListener("click", () => {
            if(this.attackType === "attack") {
                game.player.attack(game.fight.enemyTwo)
                enemySelector.style.display = "none"
            }
            else if(this.attackType === "magic" && game.player.mana > 4) {
                game.player.magic(game.fight.enemyTwo)
                enemySelector.style.display = "none"
            }
            else { 
                game.fight.outOfMana()
                enemySelector.style.display = "none"
            }
         })
        }

        createMessageDisplay() {

            this.messageDisplay = document.createElement("div")
            this.messageDisplay.className = "messageDisplay"

            this.messageDisplay.innerHTML = "<span id='message'>Text</span><span id='continue'>Continue</span>"

            const parent = document.querySelector("#canvas")
            const child = document.querySelector("#defaultCanvas0")
    
            parent.insertBefore(this.messageDisplay, child)
    
            this.messageDisplay.style.display = "none"

            const cont = document.querySelector("#continue")
            cont.addEventListener("mouseover", () => {
                cont.style.color = "red"
            })
            cont.addEventListener("mouseout", () => {
                cont.style.color = "black"
            })
            cont.addEventListener("click", () => {
                if(this.surrender === true) {
                    animations.playerIdle = false
                    this.characterDisplayBox.style.display = "none"
                    this.messageDisplay.style.display = "none"
                    this.fightContainer.style.display = "none"
                    document.querySelector(".characterBox").style.display = "flex"
                    document.querySelector(".menu").style.display = "flex"
                    this.surrender = false
                    animations.fightOne = false
                    animations.fightTwoEnemyOne = false
                    animations.fightTwoEnemyTwo = false
                    animations.fightThreeEnemyOne = false
                    animations.fightThreeEnemyTwo = false
                    animations.fightFour = false
                    animations.playerIdle = false

                    game.bossMusic.pause()
                    game.backgroundMusic.play()
                    game.backgroundMusic.jump()
                }
                else if(game.fight.round % 2 === 0) {
                    game.fight.enemyTurn()
                    this.messageDisplay.style.display = "none"
                    
                }
               else {this.messageDisplay.style.display = "none"}
            })
        }

        createEnemyMessageDisplay() {

            this.enemyMessageDisplay = document.createElement("div")
            this.enemyMessageDisplay.className = "enemyMessageDisplay"

            this.enemyMessageDisplay.innerHTML = "<span id='enemyMessage'>Text</span><span id='enemyContinue'>Continue</span>"

            const parent = document.querySelector("#canvas")
            const child = document.querySelector("#defaultCanvas0")
    
            parent.insertBefore(this.enemyMessageDisplay, child)
    
            this.enemyMessageDisplay.style.display = "none"

            const cont = document.querySelector("#enemyContinue")
            cont.addEventListener("mouseover", () => {
                cont.style.color = "red"
            })
            cont.addEventListener("mouseout", () => {
                cont.style.color = "black"
            })
            cont.addEventListener("click", () => {
            
                if(game.player.hp < 1) {
                    game.fight.playerDefeat()
                }
                else{
                    game.fight.burningDamage()
                }
                
                this.enemyMessageDisplay.style.display = "none"
            })
        }

        createBurningMessageDisplay() {
            
            this.burningDisplay = document.createElement("div")
            this.burningDisplay.className = "burningDisplay"

            this.burningDisplay.innerHTML = "<span id='burningMessage'>Text</span><span id='burningContinue'>Continue</span>"

            const parent = document.querySelector("#canvas")
            const child = document.querySelector("#defaultCanvas0")
    
            parent.insertBefore(this.burningDisplay, child)
    
            this.burningDisplay.style.display = "none"

            const cont = document.querySelector("#burningContinue")
            cont.addEventListener("mouseover", () => {
                cont.style.color = "red"
            })
            cont.addEventListener("mouseout", () => {
                cont.style.color = "black"
            })
            cont.addEventListener("click", () => {
         
                game.fightScreen.burningDisplay.style.display = "none"
            })
        }

    }
