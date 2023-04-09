

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
        this.str = 3
        this.int = 3
        this.gold = 0

        this.target

        this.isDodging = false
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
      
        this.critValue = Math.ceil(Math.random() * 5)
        this.attackVariable = Math.floor(Math.random() * 6)

        if(this.critValue === 5) {
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

        console.log(game.fight.enemyOne)
        console.log(game.fight.enemyTwo)

        setTimeout(function() {
            if(game.fight.)

        }, 2000)
    }

    magic(enemy) {

        //play sound and animations

        game.magicSound.setVolume(0.3)
        game.magicSound.play()

        game.fight.round += 1
        animations.playerMagic = true
        animations.playerIdle = false

        //deal Damage and set burning

        enemy.burning = true

        let damage = 0
        this.attackVariable = Math.floor(Math.random() * 4)

        if(enemy.vulnerability === true) {
            damage = Math.ceil(((this.int) * 2 + this.attackVariable))
            document.querySelector("#message").innerText = "The " + enemy.name + " is vulnerable to Magic! You burned it for " + damage + " points of Magic damage!"
        }
        else if(enemy.resistance === true) {
            damage = Math.ceil(((this.int) / 2 + this.attackVariable))
            document.querySelector("#message").innerText = "The " + enemy.name + " is resistant to Magic! You burned it for " + damage + " points of Magic damage!"
        }
        else {
            damage = (this.int + this.attackVariable)
            document.querySelector("#message").innerText = "You burned the " + enemy.name + " for " + damage + " points of Magic damage!"
        }
        
        enemy.hp -= damage

        this.mana -= 5
        document.querySelector("#manaFight").innerText = this.mana + " / " + this.manaMax

        game.fightScreen.messageDisplay.style.display = "flex"
        game.fightScreen.surrender = false

        if(game.fight.enemyOne.hp < 1 && game.fight.enemyTwo.hp < 1) {
            game.fightScreen.surrender = true
            game.fight.reward()
        }
        else if(enemy.hp < 1) {
            document.querySelector("#message").innerText = "You burned the " + enemy.name + " for " + damage + " points of Magic damage an defeated it"
            game.fight.disableEnemy(enemy)
            
        }

        console.log(game.fight.enemyOne)
        console.log(game.fight.enemyTwo)
    }

}
