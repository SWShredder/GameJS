/*
    Auteur: Yanik Sweeney
    
    Fonctions permettant de gérer la vélocité d'un élément
*/

let playerPosX = 0;
let playerPosY = 0;
let maxVelocity = 8;
let playerVelocityX = 0;
let playerVelocityY = 0;
let playerSpeed = 0.5;
let dragForce = 0.1;

function updateMovement() {
    updatePlayerVelocity();
    updatePlayerPosition();
}

function updatePlayerVelocity() {
    let keysMap = getKeysPressed();
    if (keysMap["W"]) {
        playerVelocityY += playerSpeed;
    }
    if (keysMap["S"]) {
        playerVelocityY -= playerSpeed;
    }
    if (keysMap["A"]) {
        playerVelocityX -= playerSpeed;
    }
    if (keysMap["D"]) {
        playerVelocityX += playerSpeed;
    }
    applyDrag();
    applyMaxVelocity();

}

function applyMaxVelocity() {
    if (playerVelocityX > 0 && playerVelocityX > maxVelocity) {
        playerVelocityX = maxVelocity;
    }
    else if (playerVelocityX < 0 && playerVelocityX < -1 * maxVelocity) {
        playerVelocityX = -1 * maxVelocity;
    }
    if (playerVelocityY > 0 && playerVelocityY > maxVelocity) {
        playerVelocityY = maxVelocity;
    }
    else if (playerVelocityY < 0 && playerVelocityY < -1 * maxVelocity) {
        playerVelocityY = -1 * maxVelocity;
    }
}

function updatePlayerPosition() {
    playerPosX += playerVelocityX;
    playerPosY += playerVelocityY;
}

function applyDrag() {
    if (playerVelocityX !== 0) {
        if (playerVelocityX > 0) {
            playerVelocityX = playerVelocityX - dragForce <= 0 ? 0 : playerVelocityX - dragForce;
        }
        else {
            playerVelocityX = playerVelocityX + dragForce >= 0 ? 0 : playerVelocityX + dragForce;
        }
    }

    if (playerVelocityY !== 0) {
        if (playerVelocityY > 0) {
            playerVelocityY = (playerVelocityY - dragForce) <= 0 ? 0 : playerVelocityY - dragForce;
        }
        else {
            playerVelocityY = (playerVelocityY + dragForce) >= 0 ? 0 : playerVelocityY + dragForce;
        }
    }
}

function getPlayerPosition() {
    return [playerPosX, playerPosY];
}

function getPlayerVelocity() {
    return [playerVelocityX, playerVelocityY];
}