
class Animations {
    
    constructor() {
        this.idle
        this.attack
        this.magic
        this.crit
        this.dodge

        this.characterScreen = false
        this.fightOne = false
        this.fightTwoEnemyOne = false
        this.fightTwoEnemyTwo = false
        this.fightThreeEnemyOne = false
        this.fightThreeEnemyTwo = false
        this.fightFour = false

        this.playerAttack = false
        this.playerIdle = false
        this.playerMagic = false
        this.playerCrit = false
        this.playerDodge = false

        this.golemAttackTrigger = false
        this.goblinAttackTrigger = false
        this.eyeballAttackTrigger = false
        this.skeletonAttackTrigger = false
        this.mushroomAttackTrigger = false
    }

    preload() {
        
        this.eyeball = loadGif("assets/eyeballIdle.gif")
        this.eyeballAttack = loadGif("assets/eyeballAttack.gif")
        this.eyeballHit = loadGif("assets/EyeballHit.gif")
        this.eyeballDeath = loadGif("assets/EyeballDeath.gif")
        this.eyeballDeathStill = loadImage("assets/EyeballDeathStill.png")

        this.goblin = loadGif("assets/GoblinIdle.gif")
        this.goblinAttack = loadGif("assets/GoblinAttack.gif")
        this.goblinHit = loadGif("assets/GoblinHit.gif")
        this.goblinDeath = loadGif("assets/GoblinDeath.gif")
        this.goblinDeathStill = loadImage("assets/GoblinDeathStill.png")

        this.skeleton = loadGif("assets/SkeletonIdle.gif")
        this.skeletonAttack = loadGif("assets/SkeletonAttack.gif")
        this.skeletonHit = loadGif("assets/SkeletonHit.gif")
        this.skeletonDeath = loadGif("assets/SkeletonDeath.gif")
        this.skeletonDeathStill = loadImage("assets/SkeletonDeathStill.png")

        this.mushroom = loadGif("assets/MushroomIdle.gif")
        this.mushroomAttack = loadGif("assets/MushroomAttack.gif")
        this.mushroomHit = loadGif("assets/MushroomHit.gif")
        this.mushroomDeath = loadGif("assets/MushroomDeath.gif")
        this.mushroomDeathStill = loadGif("assets/MushroomDeathStill.png")

        this.golem = loadGif("assets/golemIdle.gif")
        this.golemAttack = loadGif("assets/GolemAttack.gif")

        this.idle = loadGif("assets/idle.gif")
        this.attack = loadGif("assets/attack1.gif")
        this.magic = loadGif("assets/cast.gif")
        this.crit = loadGif("assets/heavyAttack.gif")
        this.dodge = loadGif("assets/dodge.gif")
        this.attack.pause()
        this.magic.pause()
        this.crit.pause()
        this.dodge.pause()

        this.golemAttack.pause()
        this.eyeballAttack.pause()
    }

    draw() {
        clear()

        // basic animations
        
        if(this.playerIdle === true) {
            image(this.idle, 120, 244)
        }
        if(this.characterScreen === true) {
            image(this.idle, 387, 170)
        }
        if(this.fightOne === true) {
            image(this.eyeball, 400, 70)
        }
        if(this.fightTwoEnemyOne === true) {
            image(this.goblin, 350, 290)
        }
        if(this.fightTwoEnemyTwo === true) {
            image(this.goblin, 550, 244)
        }
        if(this.fightThreeEnemyOne === true) {
            image(this.skeleton, 350, 260)
        }
        if(this.fightThreeEnemyTwo === true) {
            image(this.mushroom, 550, 244)        
        }
        if(this.fightFour === true) {
            image(this.golem, 480, 20)
        }

        // player animations

        if(this.playerAttack === true) {
            
            image(this.attack, 120, 244)
            this.attack.play()

            if(this.attack.frame() === 11) {
                this.playerAttack = false
                this.attack.frame(0)
                this.attack.pause()
                this.playerIdle = true
            }
        }

        if(this.playerMagic === true) {
            
            image(this.magic, 120, 244)
            this.magic.play()

            if(this.magic.frame() === 8) {
                this.playerMagic = false
                this.magic.frame(0)
                this.magic.pause()
                this.playerIdle = true
            }
        }

        if(this.playerCrit === true) {
            
            image(this.crit, 120, 244)
            this.crit.play()

            if(this.crit.frame() === 19) {
                this.playerCrit = false
                this.crit.frame(0)
                this.crit.pause()
                this.playerIdle = true
            }
        }

        if(this.playerDodge === true) {
            
            image(this.dodge, 120, 244)
            this.dodge.play()

            if(this.dodge.frame() === 9) {
                this.playerDodge = false
                this.dodge.frame(0)
                this.dodge.pause()
                this.playerIdle = true
            }
        }

        //enemy animations

        if(this.golemAttackTrigger === true) {
            
            this.fightFour = false
            image(this.golemAttack, 480, 20)
            this.golemAttack.play()

            if(this.golemAttack.frame() === 5) {
                this.golemAttackTrigger = false
                this.golemAttack.frame(0)
                this.golemAttack.pause()
                this.fightFour = true
            }
        }

        if(this.eyeballAttackTrigger === true) {
            
            this.fightOne = false
            image(this.eyeballAttack, 400, 70)
            this.eyeballAttack.play()

            if(this.eyeballAttack.frame() === 7) {
                this.eyeballAttackTrigger = false
                this.eyeballAttack.frame(0)
                this.eyeballAttack.pause()
                this.fightOne = true
            }
        }


        if(this.goblinAttackTrigger === true) {
            
            this.fightTwoEnemyOne = false
            this.fightTwoEnemyTwo = false
            image(this.goblinAttack, 480, 20)
            this.goblinAttack.play()

            if(this.goblinAttack.frame() === 5) {
                this.goblinAttackTrigger = false
                this.goblinAttack.frame(0)
                this.goblinAttack.pause()
                this.fightTwoEnemyOne = true
                this.fightTwoEnemyTwo = true
            }
        }
        
        
    }

}
