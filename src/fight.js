
class Fight {
     
    constructor() {
        this.enemyOne = new Enemy()
        this.enemyTwo = new Enemy()

        this.round 

        this.rewardGold
        this.level
        this.rewardRank
    }

    generateFightOne() {

        this.round = 1
        game.player.hp = game.player.hpMax
        game.player.mana = game.player.manaMax
        document.querySelector("#hpFight").innerText = "HP: " + game.player.hpMax + " / " + game.player.hpMax
        document.querySelector("#manaFight").innerText = "Mana: " + game.player.manaMax + " / " + game.player.manaMax

        //enemies

        this.enemyOne.name = "Goblin"
        this.enemyOne.hp = 10
        this.enemyOne.str = 20

        this.enemyTwo.hp = 0

        //rewards
        
        this.rewardGold = 50
        this.level = 2
        this.rewardRank = 1

        document.querySelector("#selectorOne").innerText = "Goblin"
        document.querySelector("#selectorTwo").innerText = ""

        console.log(this.enemyOne)
    }

    generateFightTwo() {

        this.round = 1
        game.player.hp = game.player.hpMax
        game.player.mana = game.player.manaMax
        document.querySelector("#hpFight").innerText = "HP: " + game.player.hpMax + " / " + game.player.hpMax
        document.querySelector("#manaFight").innerText = "Mana: " + game.player.manaMax + " / " + game.player.manaMax

        //enemies

        this.enemyOne.name = "Goblin"
        this.enemyOne.hp = 10
        this.enemyOne.str = 3

        this.enemyTwo.name = "Goblin"
        this.enemyTwo.hp = 10
        this.enemyTwo.str = 3

        //rewards
        
        this.rewardGold = 100
        this.level = 3
        this.rewardRank = 2

        document.querySelector("#selectorOne").innerText = "Goblin"
        document.querySelector("#selectorTwo").innerText = "Goblin"

        console.log(this.enemyOne)
        console.log(this.enemyTwo)
        console.log(this.round)
    }

    generateFightThree() {

        this.round = 1
        game.player.hp = game.player.hpMax
        game.player.mana = game.player.manaMax
        document.querySelector("#hpFight").innerText = "HP: " + game.player.hpMax + " / " + game.player.hpMax
        document.querySelector("#manaFight").innerText = "Mana: " + game.player.manaMax + " / " + game.player.manaMax

        //enemies

        this.enemyOne.name = "Skeleton"
        this.enemyOne.hp = 10
        this.enemyOne.str = 3

        this.enemyTwo.name = "Mushroom"
        this.enemyTwo.hp = 10
        this.enemyTwo.str = 3

        //rewards
        
        this.rewardGold = 300
        this.level = 4
        this.rewardRank = 3

        document.querySelector("#selectorOne").innerText = "Skeleton"
        document.querySelector("#selectorTwo").innerText = "Mushroom"

        console.log(this.enemyOne)
        console.log(this.enemyTwo)
    }

    generateFightFour() {

        this.round = 1
        game.player.hp = game.player.hpMax
        game.player.mana = game.player.manaMax
        document.querySelector("#hpFight").innerText = "HP: " + game.player.hpMax + " / " + game.player.hpMax
        document.querySelector("#manaFight").innerText = "Mana: " + game.player.manaMax + " / " + game.player.manaMax

        //enemies

        this.enemyOne.name = "Golem"
        this.enemyOne.hp = 10
        this.enemyOne.str = 3

        this.enemyTwo.hp = 0

        //rewards
        
        this.rewardGold = 1000
        this.level = 5
        this.rewardRank = 4

        document.querySelector("#selectorOne").innerText = "Golem"

        console.log(this.enemyOne)
    }
    
    disableEnemy(enemy) {
        if(enemy === this.enemyOne) {
            document.querySelector("#selectorOne").innerText = ""
        }
        else {
            document.querySelector("#selectorTwo").innerText = ""
        }
    }

    enemyTurn() {

        game.fightScreen.enemyMessageDisplay.style.display = "flex"

        if(this.enemyOne.hp > 0 && this.enemyTwo.hp > 0) {
            this.enemyOne.attack(1)
        }
        else if(this.enemyOne.hp > 0 && this.enemyTwo.hp < 1) {
            this.enemyOne.attack(2)
        }
        else if(this.enemyOne.hp < 1 && this.enemyTwo.hp > 0) {
            this.enemyOne.attack(3)
        }
        
    }

    outOfMana() {
        game.fightScreen.messageDisplay.style.display = "flex"

        document.querySelector("#message").innerText = "You are out of Mana!" 
    }

    playerDefeat() {

        console.log("gameover")
        game.fightScreen.messageDisplay.style.display = "flex"
        game.fightScreen.surrender = true

        document.querySelector("#message").innerText = "Your enemies defeated you, try again!" 

    }

    reward() {
        console.log("rewarding")
        if(game.player.level < this.level && game.player.rank < this.rewardRank) {
            document.querySelector("#message").innerText = "You won the fight! You earn " + this.rewardGold + " Gold and Level Up to Level " + this.level + " !"
           
            game.player.level = this.level
            game.player.gold += this.rewardGold

            document.querySelector("#level").innerText = "Level: " + this.level
            document.querySelector("#gold").innerText = "Gold: " + game.player.gold

            switch(this.rewardRank) {
                case 1 : document.querySelector("#rank").innerText = "Rank: Combatant"
                game.player.rank = 1
                break;
                case 2 : document.querySelector("#rank").innerText = "Rank: Gladiator"
                game.player.rank = 2
                break;
                case 3 : document.querySelector("#rank").innerText = "Rank: Warrior"
                game.player.rank = 3
                break;
                case 4 : document.querySelector("#rank").innerText = "Rank: Arena Champion"
                game.player.rank = 4
                break;
            }

            switch(game.player.level) {
                case 2 :    document.querySelector("#hp").innerText = "HP: 25"
                            document.querySelector("#mana").innerText = "Mana: 15"
                            document.querySelector("#strength").innerText = "Strength: 7"
                            document.querySelector("#intelligence").innerText = "Intelligence: 6"
                            game.player.hpMax = 25
                            game.player.manaMax = 15
                            game.player.str = 7
                            game.player.int = 6
                            break;

                case 3 :    document.querySelector("#hp").innerText = "HP: 30"
                            document.querySelector("#mana").innerText = "Mana: 20"
                            document.querySelector("#strength").innerText = "Strength: 10"
                            document.querySelector("#intelligence").innerText = "Intelligence: 8"
                            game.player.hpMax = 30
                            game.player.manaMax = 20
                            game.player.str = 10
                            game.player.int = 8
                            break;

                case 4 :    document.querySelector("#hp").innerText = "HP: 35"
                            document.querySelector("#mana").innerText = "Mana: 25"
                            document.querySelector("#strength").innerText = "Strength: 12"
                            document.querySelector("#intelligence").innerText = "Intelligence: 12"
                            game.player.hpMax = 35
                            game.player.manaMax = 25
                            game.player.str = 12
                            game.player.int = 12
                            break;

                case 5 :    document.querySelector("#hp").innerText = "HP: 50"
                            document.querySelector("#mana").innerText = "Mana: 30"
                            document.querySelector("#strength").innerText = "Strength: 20"
                            document.querySelector("#intelligence").innerText = "Intelligence: 20"
                            game.player.hpMax = 50
                            game.player.manaMax = 30
                            game.player.str = 20
                            game.player.int = 20
                            break;
            }

        }
        else {
            document.querySelector("#message").innerText = "You won the fight! You earn " + this.rewardGold + " Gold!"

            game.player.gold += this.rewardGold

            document.querySelector("#gold").innerText = "Gold: " + game.player.gold
        }
    }

}

