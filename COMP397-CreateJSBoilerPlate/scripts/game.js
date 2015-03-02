// CreateJS Boilerplate for COMP397
// Global Variables
var canvas;
var stage;
var helloTxt;
var buttonBitmap;

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas); // Parent object
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); //set the frame rate to 60 fps
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}

// GAMELOOP
function gameLoop() {
    stage.update();
}

function buttonClicked() {
    helloTxt.text = "Good Bye";
}

function buttonHover() {
    buttonBitmap.alpha = 0.5;
}

function buttonOut() {
    buttonBitmap.alpha = 1;
}

function main() {
    // This is were the main game codes are placed
    helloTxt = new createjs.Text("Hello World", "40px Consolas", "#FF00FF");
    stage.addChild(helloTxt); // First child object to the stage
    buttonBitmap = new createjs.Bitmap("assets/images/button.bmp");
    buttonBitmap.x = 100;
    buttonBitmap.y = 100;
    buttonBitmap.scaleX = 0.25;
    buttonBitmap.scaleY = 0.25;
    buttonBitmap.addEventListener("click", buttonClicked);

    buttonBitmap.addEventListener("mouseover", buttonHover);
    buttonBitmap.addEventListener("mouseout", buttonOut);
    stage.addChild(buttonBitmap);
}
//# sourceMappingURL=game.js.map
