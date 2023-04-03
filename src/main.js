
const game = new Game();
const animations = new Animations();


function preload() {
    console.log("preloading main")
    game.preload()
    animations.preload()

}

function setup() {
    let canvas = createCanvas(screenWidth, screenHeight);
    canvas.parent("canvas")
    console.log(canvas.parent())
}

function draw() {   
    if(isClicked === true) {
        animations.draw()
    }
}


/* for navigating menus
function keyPressed() {

} */