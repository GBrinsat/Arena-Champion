
class Fight {
     
    constructor() {
        this.enemyOne = new Enemy()
        this.enemyTwo = new Enemy()

        this.round 

        this.rewardGold
        this.level
        this.rewardRank

        this.fightOne = false
        this.fightTwo = false
        this.fightThree = false
        this.fightFour = false
    }

    generateFightOne() {

        game.mainMenu.stageOneSelected = false
        this.fightOne = true

        //reset values

        document.querySelector("#selectorOne").innerText = ""
        document.querySelector("#selectorTwo").innerText = ""
        this.enemyTwo.vulnerability = false
        this.enemyOne.resistance = false


        animations.fightOne = true

        this.round = 1
        game.player.hp = game.player.hpMax
        game.player.mana = game.player.manaMax
        document.querySelector("#hpFight").innerText = "HP: " + game.player.hpMax + " / " + game.player.hpMax
        document.querySelector("#manaFight").innerText = "Mana: " + game.player.manaMax + " / " + game.player.manaMax

        //enemies setup

        this.enemyOne.name = "Floating Eyeball"
        this.enemyOne.hp = 15
        this.enemyOne.str = 3
        this.enemyOne.burning = false

        this.enemyTwo.hp = 0
        this.enemyTwo.str = 0
        this.enemyTwo.burning = false

        //rewards
        
        this.rewardGold = 50
        this.level = 2
        this.rewardRank = 1

        document.querySelector("#selectorOne").innerText = "Floating Eyeball"
        document.querySelector("#selectorTwo").innerText = ""

        console.log(this.enemyOne)
    }

    generateFightTwo() {

        this.fightTwo = true
        game.mainMenu.stageTwoSelected = false

        //reset values

        document.querySelector("#selectorOne").innerText = ""
        document.querySelector("#selectorTwo").innerText = ""
        this.enemyTwo.vulnerability = false
        this.enemyOne.resistance = false

        animations.fightTwoEnemyOne = true
        animations.fightTwoEnemyTwo = true

        this.round = 1
        game.player.hp = game.player.hpMax
        game.player.mana = game.player.manaMax
        document.querySelector("#hpFight").innerText = "HP: " + game.player.hpMax + " / " + game.player.hpMax
        document.querySelector("#manaFight").innerText = "Mana: " + game.player.manaMax + " / " + game.player.manaMax

        //enemies setup

        this.enemyOne.name = "Goblin"
        this.enemyOne.hp = 15
        this.enemyOne.str = 3
        this.enemyOne.burning = false

        this.enemyTwo.name = "Goblin"
        this.enemyTwo.hp = 15
        this.enemyTwo.str = 3
        this.enemyTwo.burning = false

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

        this.fightThree = true
        game.mainMenu.stageThreeSelected = false

        //reset values

        document.querySelector("#selectorOne").innerText = ""
        document.querySelector("#selectorTwo").innerText = ""
        this.enemyTwo.vulnerability = false
        this.enemyOne.resistance = false

        animations.fightThreeEnemyOne = true
        animations.fightThreeEnemyTwo = true

        this.round = 1
        game.player.hp = game.player.hpMax
        game.player.mana = game.player.manaMax
        document.querySelector("#hpFight").innerText = "HP: " + game.player.hpMax + " / " + game.player.hpMax
        document.querySelector("#manaFight").innerText = "Mana: " + game.player.manaMax + " / " + game.player.manaMax

        //enemies setup

        this.enemyOne.name = "Skeleton"
        this.enemyOne.hp = 20
        this.enemyOne.str = 4
        this.enemyOne.burning = false
        this.enemyOne.resistance = true

        this.enemyTwo.name = "Mushroom"
        this.enemyTwo.hp = 20
        this.enemyTwo.str = 4
        this.enemyTwo.burning = false
        this.enemyTwo.vulnerability = true

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

        this.fightFour = true
        console.log(this.fightFour)
        game.mainMenu.stageFourSelected = false

        //start Audio

        game.backgroundMusic.jump()
        game.backgroundMusic.pause()
        game.bossMusic.setVolume(0.3)
        game.bossMusic.play()
        game.bossMusic.jump()

        //reset values

        document.querySelector("#selectorOne").innerText = ""
        document.querySelector("#selectorTwo").innerText = ""
        this.enemyTwo.vulnerability = false
        this.enemyOne.resistance = false

        animations.fightFour = true

        this.round = 1
        game.player.hp = game.player.hpMax
        game.player.mana = game.player.manaMax
        document.querySelector("#hpFight").innerText = "HP: " + game.player.hpMax + " / " + game.player.hpMax
        document.querySelector("#manaFight").innerText = "Mana: " + game.player.manaMax + " / " + game.player.manaMax

        //enemies setup

        this.enemyOne.name = "Golem"
        this.enemyOne.hp = 50
        this.enemyOne.str = 10
        this.enemyOne.burning = false

        this.enemyTwo.hp = 0
        this.enemyTwo.str = 0
        this.enemyTwo.burning = false

        //rewards
        
        this.rewardGold = 1000
        this.level = 5
        this.rewardRank = 4

        document.querySelector("#selectorOne").innerText = "Golem"

        console.log(this.enemyOne)
    }
    
    disableEnemy(enemy) {
       if(enemy === this.enemyTwo) {
        animations.fightTwoEnemyTwo = false
        animations.fightThreeEnemyTwo = false
        document.querySelector("#selectorTwo").innerText = ""
    }
        else {
        animations.fightTwoEnemyOne = false
        animations.fightThreeEnemyOne = false
        document.querySelector("#selectorOne").innerText = ""
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

    burningDamage() {

        console.log("burning")
        game.fightScreen.burningDisplay.style.display = "flex"

        if(game.fight.enemyOne.burning === true && game.fight.enemyTwo.burning === true){
            game.fight.enemyOne.hp -= game.player.int
            game.fight.enemyTwo.hp -= game.player.int
            document.querySelector("#burningMessage").innerText = "Your enemies are burning and suffered " + game.player.int + " points of damage!"
        }

        else if(game.fight.enemyOne.burning === true){
            game.fight.enemyOne.hp -= game.player.int
            document.querySelector("#burningMessage").innerText = "The " + game.fight.enemyOne.name + " is burning and suffered " + game.player.int + " points of damage!"
            console.log("second condition")
        }

        else if(game.fight.enemyTwo.burning === true){
            game.fight.enemyTwo.hp -= game.player.int
            document.querySelector("#burningMessage").innerText = "The " + game.fight.enemyTwo.name + " is burning and suffered " + game.player.int + " points of damage!"
        }

        else {game.fightScreen.burningDisplay.style.display = "none"}
    }

    outOfMana() {
        game.fightScreen.enemyMessageDisplay.style.display = "none"
        game.fightScreen.messageDisplay.style.display = "flex"

        document.querySelector("#message").innerText = "You are out of Mana!" 
    }

    playerDefeat() {

        if(game.player.hp < 1) {

            console.log("gameover")
            game.fightScreen.messageDisplay.style.display = "flex"
            game.fightScreen.surrender = true

            document.querySelector("#message").innerText = "Your enemies defeated you, try again!" 

            this.fightOne = false
            this.fightTwo = false
            this.fightThree = false
            this.fightFour = false
        }
        

    }

    reward() {

        game.fightScreen.surrender = true
        this.fightOne = false
        this.fightTwo = false
        this.fightThree = false
        this.fightFour = false

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
                            game.player.str = 5
                            game.player.int = 6
                            break;

                case 3 :    document.querySelector("#hp").innerText = "HP: 30"
                            document.querySelector("#mana").innerText = "Mana: 20"
                            document.querySelector("#strength").innerText = "Strength: 10"
                            document.querySelector("#intelligence").innerText = "Intelligence: 8"
                            game.player.hpMax = 30
                            game.player.manaMax = 20
                            game.player.str = 7
                            game.player.int = 7
                            break;

                case 4 :    document.querySelector("#hp").innerText = "HP: 35"
                            document.querySelector("#mana").innerText = "Mana: 25"
                            document.querySelector("#strength").innerText = "Strength: 12"
                            document.querySelector("#intelligence").innerText = "Intelligence: 12"
                            game.player.hpMax = 35
                            game.player.manaMax = 25
                            game.player.str = 10
                            game.player.int = 10
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

