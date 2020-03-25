// Norman Lew

/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


 let game;

 document.getElementById('btn__reset').addEventListener('click', function() {
    game = new Game();
    game.startGame();
 })

// const theGame = new Game();


// theGame.startGame();
// console.log(`Active Phrase - phrase: ${theGame.activePhrase.phrase}`);
// theGame.getRandomPhrase().addPhraseToDisplay();

// theGame.phrases.forEach( (phrase, index) => {
//     console.log(`${index}: ${phrase.phrase}`);
// })

// for (let i = 0; i < 20; i++) {
//     console.log(theGame.getRandomPhrase().phrase);
// }
 