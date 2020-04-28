// Norman Lew

/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 let game;

 // Reset the game board with a new phrase and "lives" when the Start Game button is pushed
 document.getElementById('btn__reset').addEventListener('click', function() {
    game = new Game();
    const phraseDiv = document.getElementById('phrase');
    const phraseUl = phraseDiv.firstElementChild;

    while (phraseUl.hasChildNodes()) {
        phraseUl.removeChild(phraseUl.lastChild);
    }

    const keyRows = document.getElementsByClassName('keyrow');
    for (let i = 0; i < keyRows.length; i++) {
        const keys = keyRows[i].children;

        for (let j = 0; j < keys.length; j++) {
            keys[j].className = 'key'
            keys[j].removeAttribute('disabled');
        }
    }

    const hearts = document.querySelectorAll('img');
        for (let i = 0; i < hearts.length; i++) {
            
            hearts[i].alt = "Heart Icon";
            hearts[i].src = 'images/liveHeart.png';  
        }
    game.startGame();
 })
 
 // Handle a mouse click selection on the screen
 const qwerty = document.getElementById('qwerty');
 qwerty.addEventListener('click', (e) => {
     if (e.target.className === 'key') {
         game.handleInteraction(e.target);
     }
 })


 