/*
    Auteur: Yanik Sweeney
    
    Fonctions permettant la gestion des entrées W,A,S,D en utilisant un hashmap
*/
const keysPressed = {};

// Transfèrent un keydown ou keyup event en touche sur le clavier
document.onkeydown = function (evt) {
    evt = evt || window.event;
    let keyPress = evt.keyCode || evt.which;
    let charStr = String.fromCharCode(keyPress);
    keysPressed[charStr] = true;
}
document.onkeyup = function (evt) {
    evt = evt || window.event;
    let keyPress = evt.keyCode || evt.which;
    let charStr = String.fromCharCode(keyPress);
    keysPressed[charStr] = false;
}

function getKeysPressed() {
    return keysPressed;
}
