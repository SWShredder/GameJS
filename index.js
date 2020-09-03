/*
    Auteur: Yanik Sweeney
    script permettant de gérer une boucle de jeu pour faire des animations et des déplacements
*/
const keyQueue = [];
const updateQueue = [];

let positionX = 0;
let positionY = 0;
let moveSpeed = 20;
let controller;
let turnOff = false;
let secondsPassed;
let oldTimeStamp;
let fps;

document.onkeypress = function (evt) {
    evt = evt || window.event;
    let charCode = evt.keyCode || evt.which;
    let charStr = String.fromCharCode(charCode);
    //moveController(charStr);
    keyQueue.push(charStr);
};

function onStart() {
    controller = document.getElementById('control');
    controller.style.bottom = "0px";
    controller.style.left = "0px";

    window.requestAnimationFrame(gameLoop);

}

function updateMovement() {
    moveController(keyQueue.pop());
    // To flush queue
    while (keyQueue.length > 0) {
        keyQueue.pop();
    }
    positionY -= 1;
    if (positionY < 0) {
        positionY = 0;
    }
    if (positionX < 0) {
        positionX = 0;
    }
}


function draw() {
    controller.style.bottom = positionY + "px";
    controller.style.left = positionX + "px";
}

function moveController(keyPress) {
    switch (keyPress) {
        case "w":
            positionY += moveSpeed;
            break;
        case "a":
            positionX -= moveSpeed;
            break;
        case "s":
            positionY -= moveSpeed;
            break;
        case "d":
            positionX += moveSpeed;
            break;
        default:
            break;
    }
}

function updateFpsMeter() {
    let meter = document.getElementById("fpsMeter");
    meter.innerText = fps + " FPS";
}


function gameLoop(timeStamp) {

    // Calculate the number of seconds passed since the last frame
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    // Calculate fps
    fps = Math.round(1 / secondsPassed);

    updateFpsMeter();
    // Perform the drawing operation
    updateMovement();

    draw();

    // The loop function has reached it's end. Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}





