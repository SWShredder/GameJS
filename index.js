/*
    Auteur: Yanik Sweeney

    script permettant de gérer une boucle de jeu pour faire des animations et des déplacements
*/

let secondsPassed;
let oldTimeStamp;
let fps;
let gameOn = false;
let player;

function onStart() {
    const button = document.getElementById("btn_loadGame");
    if (!gameOn) {
        gameOn = true;
        button.innerText = "Game On";
        createPlayer();

        window.requestAnimationFrame(gameLoop);
    }
    else {
        gameOn = false;
        hideMetrics();
        button.innerText = "Game Off";
    }

}

function draw() {
    let positionX = getPlayerPosition()[0];
    let positionY = getPlayerPosition()[1];
    player.style.bottom = positionY + "px";
    player.style.left = positionX + "px";
}


function updateFpsMeter() {
    const meter = document.getElementById("fpsMeter");
    meter.innerText = fps + " FPS";
}

function updateVelocityMeter() {
    const meter = document.getElementById("velocityMeter")
    meter.innerText = "Velocity: " + getPlayerVelocity()[0].toFixed(3) + ", " + getPlayerVelocity()[1].toFixed(3);
}

function hideMetrics() {
    let meter = document.getElementById("fpsMeter");
    meter.innerText = "";
    meter = document.getElementById("velocityMeter");
    meter.innerText = "";
}

function createPlayer() {
    player = document.createElement('canvas');
    const context = player.getContext("2d");

    player.id = "player";
    player.width = 50;
    player.height = 50;
    player.style.zIndex = 10;
    player.style.position = "absolute";
    player.style.border = "1px solid";
    context.rect(10, 10, 50, 50);
    context.fillStyle = "blue";
    context.fill()

    const body = document.getElementById("body");
    body.appendChild(player);
}


function gameLoop(timeStamp) {
    if (gameOn) {
        secondsPassed = (timeStamp - oldTimeStamp) / 1000;
        oldTimeStamp = timeStamp;
        fps = Math.round(1 / secondsPassed);

        updateFpsMeter();
        updateMovement();
        draw();
        updateVelocityMeter();
        window.requestAnimationFrame(gameLoop);
    }
}






