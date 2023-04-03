
class FightScreen {

    constructor() {
        this.attackType
    }
    
    displayFightScreen() {
       
        document.querySelector(".fightSelectContainer").style.display = "none"

        //create new elements

        const fightContainer = document.createElement("div")
        fightContainer.className = "fightContainer"

        fightContainer.innerHTML = "<div class='options'><span id='attack'>Attack</span><span id='magic'>Magic</span><span id='dodge'>Dodge</span><span id='surrender'>Surrender</span></div><div class='statusField'><span id='name'>Name</span><span id='hp'></span>HP:<span id='mana'>Mana: </span></div"
        
        const characterDisplayBox = document.createElement("div")
        characterDisplayBox.className = "characterDisplayBox"

        characterDisplayBox.innerHTML = "<div class='playerDisplay'></div><div class='enemyDisplayOne'></div><div class='enemyDisplayTwo'></div>"

        const parent = document.querySelector("#canvas")
        const child = document.querySelector("#defaultCanvas0")

        parent.insertBefore(fightContainer, child)
        parent.insertBefore(characterDisplayBox, child)
    
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
                document.querySelector(".enemySelector").style.display = "block"
            }
        })

        magic.addEventListener("click", () => {
            if(magic.style.color === "red"){
                this.attackType = "magic"
                document.querySelector(".enemySelector").style.display = "block"
            }
        })

        dodge.addEventListener("click", () => {
            if(dodge.style.color === "red"){
                //fight function dodge
            }
        })

        surrender.addEventListener("click", () => {
            if(surrender.style.color === "red"){
                // display message, return to menu
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
                console.log("attack")
                //use attack function on enemy one
            }
            else if(this.attackType === "magic") {
                console.log("magic")
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
                //use attack function on enemy two
            }
            else if(this.attackType === "magic") {
                console.log("magic")
            }
            enemySelector.style.display = "none"
         })
        }

        createMessageDisplay() {

            const messageDisplay = document.createElement("div")
            messageDisplay.className = "messageDisplay"

            messageDisplay.innerHTML = "<span>Test</span><span id='continue'>Continue</span>"

            const parent = document.querySelector("#canvas")
            const child = document.querySelector("#defaultCanvas0")
    
            parent.insertBefore(messageDisplay, child)
    
            //messageDisplay.style.display = "none"

            const cont = document.querySelector("#continue")
            cont.addEventListener("mouseover", () => {
                cont.style.color = "red"
            })
            cont.addEventListener("mouseout", () => {
                cont.style.color = "black"
            })
            cont.addEventListener("click", () => {
                messageDisplay.style.display = "none"
            })
        }
    }
