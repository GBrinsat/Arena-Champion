
class Animations {
    constructor() {
        this.gif
    }

   /*  playerCharacterScreen(x, y) {
        //use this to position gif
    } */

    preload() {
        
        this.gif = loadGif("../assets/idle.gif")
    }

    draw() {
        clear()
        console.log("isdrawing")
        image(this.gif, 387, 170)
    }




}