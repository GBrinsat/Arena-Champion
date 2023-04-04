

class Player {
    
    constructor() {
        this.image
        this.name
        this.level = 1
        this.rank = 0

        this.hpMax = 20
        this.manaMax = 10
        this.hp = 20
        this.mana = 10
        this.str = 5
        this.int = 5
        this.gold = 0

        this.target
    }

    attack(enemy) {

        game.fight.round += 1
        
        enemy.hp -= this.str
        document.querySelector("#message").innerText = "You slashed the " + enemy.name + " for " + this.str + " points of damage!"
        game.fightScreen.messageDisplay.style.display = "flex"
        game.fightScreen.surrender = false

        if(game.fight.enemyOne.hp < 1 && game.fight.enemyTwo.hp < 1) {
            game.fightScreen.surrender = true
            game.fight.reward()
        }
        else if(enemy.hp < 1) {
            document.querySelector("#message").innerText = "You slashed the " + enemy.name + " for " + this.str + " points of damage and defeated it"
            game.fight.disableEnemy(enemy)
        }
    }

    magic(enemy) {

        game.fight.round += 1
        
        this.mana -= 5
        document.querySelector("#manaFight").innerText = this.mana + " / " + this.manaMax

        enemy.hp -= this.int
        document.querySelector("#message").innerText = "You burned the " + enemy.name + " for " + this.int + " points of damage!"
        game.fightScreen.messageDisplay.style.display = "flex"
        game.fightScreen.surrender = false

        if(game.fight.enemyOne.hp < 1 && game.fight.enemyTwo.hp < 1) {
            game.fightScreen.surrender = true
            game.fight.reward()
        }
        else if(enemy.hp < 1) {
            document.querySelector("#message").innerText = "You burned the " + enemy.name + " for " + this.int + " points of damage an defeated it"
            game.fight.disableEnemy(enemy)
            
        }
    }
}
