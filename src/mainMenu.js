
class MainMenu {

    constructor() {
        this.stageOneSelected = false
        this.stageTwoSelected = false
        this.stageThreeSelected = false
        this.stageFourSelected = false
    }

    displayMenu() {

        //create new Elements to display

        const characterBox = document.createElement("div")
        const menu = document.createElement("div")

        menu.className = "menu"
        characterBox.className = "characterBox"

        characterBox.innerHTML = "<div class='characterDisplay'></div><div class ='characterStats'><span>Name: </span><span>Level:</span><span>Rank: </span><br><span>HP: </span><span>Mana: </span><span>Strength: </span><span>Intelligence: </span><span>Gold: </span></div>"
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
            }
           })
        shop.addEventListener("click", () => {
            if(shop.style.color = "red") {
               console.log("transfer to shop")
            }
           })
    }

    displayFightSelect() {

        //create new Elements to display

        document.querySelector(".characterBox").remove()
        document.querySelector(".menu").remove()

        const container = document.createElement("div")
        container.className = "fightSelectContainer"

        const stageDisplay = document.createElement("div")

        container.innerHTML = "<div class='fightSelect'><span id='stageOne'>Teststage 1</span><span id='stageTwo'>Teststage 2</span><span id='stageThree'>Teststage 3</span><span id='stageFour'>Teststage 4</span></div><div class='startFight'><span id='startFight'>Start Fight</span></div>"

        const parent = document.querySelector("#canvas")
        const child = document.querySelector("#defaultCanvas0")

        parent.insertBefore(container, child)

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
                this.stageOneSelected === true
                this.stageTwoSelected === false
                this.stageThreeSelected === false
                this.stageFourSelected === false
                stageOne.style.textDecoration = "underline"
                stageTwo.style.textDecoration = "none"
                stageThree.style.textDecoration = "none"
                stageFour.style.textDecoration = "none"
            }
        })

        stageTwo.addEventListener("click", () => {
            if(stageTwo.style.color === "red"){
                this.stageOneSelected === false
                this.stageTwoSelected === true
                this.stageThreeSelected === false
                this.stageFourSelected === false
                stageOne.style.textDecoration = "none"
                stageTwo.style.textDecoration = "underline"
                stageThree.style.textDecoration = "none"
                stageFour.style.textDecoration = "none"
            }
        })

        stageThree.addEventListener("click", () => {
            if(stageThree.style.color === "red"){
                this.stageOneSelected === false
                this.stageTwoSelected === false
                this.stageThreeSelected === true
                this.stageFourSelected === false
                stageOne.style.textDecoration = "none"
                stageTwo.style.textDecoration = "none"
                stageThree.style.textDecoration = "underline"
                stageFour.style.textDecoration = "none"
            }
        })

        stageFour.addEventListener("click", () => {
            if(stageFour.style.color === "red"){
                this.stageOneSelected === false
                this.stageTwoSelected === false
                this.stageThreeSelected === false
                this.stageFourSelected === true
                stageOne.style.textDecoration = "none"
                stageTwo.style.textDecoration = "none"
                stageThree.style.textDecoration = "none"
                stageFour.style.textDecoration = "underline"
            }
        })

        //transfer to fight screen

        startFight.addEventListener("click", () => {
            if(startFight.style.color === "red"){
                console.log("transfer to fight screen")
                game.fightScreen.displayFightScreen()
                game.fightScreen.createEnemySelector()
                game.fightScreen.createMessageDisplay()
            }
        })

        

        /* const startFight = document.querySelector("#startCombat")

        <span id='selectFight'>Select Fight</span> */

        /* startFight.addEventListener("click", () => {
            if(startFight.style.color = "red") {
               console.log("transfer to selectfight")
            }
           }) */
    }
}