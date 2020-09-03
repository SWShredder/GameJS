let positionX = 0;
let positionY = 0;
let moveSpeed = 20;
let controller;
let turnOff = false;
let deltaTime = 0;
const keyQueue = [];
const updateQueue = [];

/*
    auteur: Yanik Sweeney
    Permet à la page de recevoir les évènements des key presses
*/
document.onkeypress = function (evt) {
    evt = evt || window.event;
    let charCode = evt.keyCode || evt.which;
    let charStr = String.fromCharCode(charCode);
    //moveController(charStr);
};

function onStart() {
    controller = document.getElementById('control');
    controller.style.bottom = "0px";
    controller.style.left = "0px";
}

function moveController(keyPress) {
    switch (keyPress) {
        case "w":
            positionY += moveSpeed;
            controller.style.bottom = positionY + "px";
            break;
        case "a":
            positionX -= moveSpeed;
            controller.style.left = positionX + "px";
            break;
        case "s":
            positionY -= moveSpeed;
            controller.style.bottom = positionY + "px";
            break;
        case "d":
            positionX += moveSpeed;
            controller.style.left = positionX + "px";
            break;
        default:
            break;
    }
}

function loopProcessor() {
    let time = Date.now();
    while (!turnOff) {
        
    }
}





