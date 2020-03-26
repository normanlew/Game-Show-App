// Norman Lew

/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor() { 
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrase1 = new Phrase('buy one get one free');
        const phrase2 = new Phrase('your time is up');
        const phrase3 = new Phrase('a piece of cake');
        const phrase4 = new Phrase('the crowd went wild');
        const phrase5 = new Phrase('beware of falling rocks');
        const phraseArray = [phrase1, phrase2, phrase3, phrase4 , phrase5];
        return phraseArray;
    }

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        return (this.phrases[Math.floor(this.phrases.length * Math.random())]);
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    * won
    */
    checkForWin() {
        const hiddenDivs = document.getElementsByClassName('hide');
        if (hiddenDivs.length === 0) {
            return true;
        }
        return false;
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        this.missed++;
        let noMoreHearts = true;
        const hearts = document.querySelectorAll('img');
        for (let i = 0; i < hearts.length; i++) {
            if (hearts[i].alt === 'Heart Icon') {
                noMoreHearts = false;
                hearts[i].alt = "Lost Heart Icon";
                hearts[i].src = 'images/lostHeart.png';
                break;
            }
        }

        if (noMoreHearts) {
            this.gameOver(false);
        }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = '';
        overlayDiv.className = 'start';
        const h1 = document.getElementById('game-over-message');
        if (gameWon) {
            h1.textContent = 'Congratulations!  You win!';
            overlayDiv.classList.add('win');
        }
        else {
            h1.textContent = 'Sorry.  You lost.  Try again.';
            overlayDiv.classList.add('lose');
        }
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        const char = button.textContent;
        button.disabled = true;

        if (!this.activePhrase.checkLetter(char)) {
            button.classList.add('wrong');
            this.removeLife();
        }
        else {
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(char);

            if (this.checkForWin()){
                this.gameOver(true);
            }
        }
        
    };
}