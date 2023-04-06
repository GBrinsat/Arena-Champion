
class Enemy {

    constructor() {
        this.name
        this.hp = 0
        this.str

        this.burning = false
        this.vulnerability = false
        this.resistance = false

        this.attackVariable = Math.floor(Math.random() * 8)
    }

    attack(enemy) {

        var damage 

        if (enemy === 1) {

        //calculate damage

        if(game.player.isDodging === true) {
            damage = Math.ceil(((game.fight.enemyOne.str + game.fight.enemyTwo.str) + this.attackVariable) / 2)
            game.player.isDodging = false
        }
        else {
            damage = (game.fight.enemyOne.str + game.fight.enemyTwo.str) + this.attackVariable
        }
        game.player.hp -= damage

        document.querySelector("#enemyMessage").innerText = "The enemies dealt " + damage + " points of damage to you!"
        game.fightScreen.enemyMessageDisplay.style.display = "true"

        game.fightScreen.surrender = false

        document.querySelector("#hpFight").innerText = "HP: " + game.player.hp + " / " + game.player.hpMax

        }
        else if (enemy === 2) {

            //calculate damage

            if(game.player.isDodging === true) {
                damage = Math.ceil((game.fight.enemyOne.str + this.attackVariable) / 2)
                game.player.isDodging = false
            }
            else {
                damage = game.fight.enemyOne.str + this.attackVariable
            }
            game.player.hp -= damage

            document.querySelector("#enemyMessage").innerText = "The " + game.fight.enemyOne.name + " dealt " + damage + " points of damage to you!"
            game.fightScreen.enemyMessageDisplay.style.display = "true"

            game.fightScreen.surrender = false

            document.querySelector("#hpFight").innerText = "HP: " + game.player.hp + " / " + game.player.hpMax

            }
            else if (enemy === 3) {

                //calculate damage

                if(game.player.isDodging === true) {
                    damage = Math.ceil((game.fight.enemyTwo.str + this.attackVariable) / 2)
                    game.player.isDodging = false
                }
                else {
                    damage = game.fight.enemyTwo.str + this.attackVariable
                }
                game.player.hp -= damage

                document.querySelector("#enemyMessage").innerText = "The " + game.fight.enemyTwo.name + " dealt " + damage + " points of damage to you!"
                game.fightScreen.enemyMessageDisplay.style.display = "true"

                game.fightScreen.surrender = false

                document.querySelector("#hpFight").innerText = "HP: " + game.player.hp + " / " + game.player.hpMax

                }

                

        game.fight.round += 1
    }
}