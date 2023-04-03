
class MainMenu {

    displayMenu() {

        const characterDisplay = document.createElement("div")
        const characterStats = document.createElement("div")
        const menu = document.createElement("div")

        characterDisplay.className = "characterDisplay"
        characterStats.className = "characterStats"
        menu.className = "menu"

        menu.innerHTML = "<span>Select Fight</span><span>Start Combat</span><span>Enter Shop</span>"

        const parent = document.querySelector("#canvas")
        const child = document.querySelector("#defaultCanvas0")

        parent.insertBefore(menu, child)

    }
}