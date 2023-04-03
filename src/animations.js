
class Animations {
    
    constructor() {
        this.gif
    }

    preload() {
        
        this.gif = loadGif("../assets/idle.gif")
    }

    draw() {
        clear()
        console.log("isdrawing")
        image(this.gif, 387, 170)
    }

    stopGif() {
        this.gif = "none"
        noLoop()
    }




}