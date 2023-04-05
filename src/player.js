

class Player {
    
    constructor() {
        this.image
        this.name
        this.level = 1
        this.rank = "Rookie"

        this.hpMax = 20
        this.manaMax = 10
        this.hp = 20
        this.mana = 10
        this.str = 3
        this.int = 3
        this.gold = 0

        this.target

        this.attackVariable
        this.magicVariable
        this.critValue
    }

    attack(enemy) {

        game.attackSound.setVolume(0.3)
        game.attackSound.play()

        game.fight.round += 1
        animations.playerIdle = false
        
        //set Dmg Values
      
        this.critValue = Math.floor(Math.random() * 4)
        this.attackVariable = Math.floor(Math.random() * 6)

        if(this.critValue === 4) {
            animations.playerCrit = true

            enemy.hp -= (this.str + this.attackVariable + 10)
            document.querySelector("#message").innerText = "CRITICAL HIT! You slashed the " + enemy.name + " for " + (this.str + this.attackVariable + 10)+ " points of damage!"
            game.fightScreen.messageDisplay.style.display = "flex"
            game.fightScreen.surrender = false

            if(game.fight.enemyOne.hp < 1 && game.fight.enemyTwo.hp < 1) {
                animations.playerIdle = false
                game.fight.reward()
            }
            else if(enemy.hp < 1) {
                document.querySelector("#message").innerText = "CRITICAL HIT! You slashed the " + enemy.name + " for " + (this.str + this.attackVariable + 10) + " points of damage and defeated it"
                game.fight.disableEnemy(enemy)
            }}

            else {
            animations.playerAttack = true

            enemy.hp -= (this.str + this.attackVariable)
            document.querySelector("#message").innerText = "You slashed the " + enemy.name + " for " + (this.str + this.attackVariable)+ " points of damage!"
            game.fightScreen.messageDisplay.style.display = "flex"
            game.fightScreen.surrender = false

            if(game.fight.enemyOne.hp < 1 && game.fight.enemyTwo.hp < 1) {
                animations.playerIdle = false
                game.fight.reward()
            }
            else if(enemy.hp < 1) {
                document.querySelector("#message").innerText = "You slashed the " + enemy.name + " for " + (this.str + this.attackVariable) + " points of damage and defeated it"
                game.fight.disableEnemy(enemy)
        }}
    }

    magic(enemy) {

        game.magicSound.setVolume(0.3)
        game.magicSound.play()

        game.fight.round += 1
        animations.playerMagic = true
        animations.playerIdle = false

        //set Dmg Values

        this.attackVariable = Math.floor(Math.random() * 6)
        enemy.hp -= (this.int + this.attackVariable)
        
        this.mana -= 5
        document.querySelector("#manaFight").innerText = this.mana + " / " + this.manaMax

        enemy.hp -= this.int
        document.querySelector("#message").innerText = "You burned the " + enemy.name + " for " + (this.int + this.attackVariable) + " points of damage!"
        game.fightScreen.messageDisplay.style.display = "flex"
        game.fightScreen.surrender = false

        if(game.fight.enemyOne.hp < 1 && game.fight.enemyTwo.hp < 1) {
            game.fightScreen.surrender = true
            game.fight.reward()
        }
        else if(enemy.hp < 1) {
            document.querySelector("#message").innerText = "You burned the " + enemy.name + " for " + (this.int + this.attackVariable) + " points of Magic damage an defeated it"
            game.fight.disableEnemy(enemy)
            
        }
    }
}
