/*
    Auteur: Yanik Sweeney
    script permettant de gérer une boucle de jeu pour faire des animations et des déplacements
*/

const updateQueue = [];

let moveSpeed = 10;
let controller;
let turnOff = false;
let secondsPassed;
let oldTimeStamp;
let fps;

function onStart() {
    controller = document.getElementById('control');
    controller.style.bottom = "0px";
    controller.style.left = "0px";

    window.requestAnimationFrame(gameLoop);

}

function draw() {
    let positionX = getPlayerPosition()[0];
    let positionY = getPlayerPosition()[1];
    controller.style.bottom = positionY + "px";
    controller.style.left = positionX + "px";
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






