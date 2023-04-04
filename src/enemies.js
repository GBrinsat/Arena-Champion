
class Enemy {

    constructor() {
        this.name
        this.hp = 0
        this.str
    }

    attack(enemy) {

        var damage 

        if (enemy === 1) {
        damage = (game.fight.enemyOne.str + game.fight.enemyTwo.str)
        game.player.hp -= damage
        document.querySelector("#message").innerText = "The enemies dealt " + damage + " points of damage to you!"
        game.fightScreen.surrender = false
        }
        else if (enemy === 2) {
            damage = game.fight.enemyOne.str
            game.player.hp -= damage
            document.querySelector("#message").innerText = "The " + game.fight.enemyOne.name + " dealt " + damage + " points of damage to you!"
            game.fightScreen.surrender = false
            }
            else if (enemy === 3) {
                damage = game.fight.enemyTwo.str
                game.player.hp -= damage
                document.querySelector("#message").innerText = "The " + game.fight.enemyTwo.name + " dealt " + damage + " points of damage to you!"
                game.fightScreen.surrender = false
                }

        game.fight.round += 1
    }
}