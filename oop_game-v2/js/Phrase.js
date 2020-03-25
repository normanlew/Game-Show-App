// Norman Lew

/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
         this.phrase = phrase.toLowerCase();
     }

     /**
     * Display phrase on game board
     */
     addPhraseToDisplay() {
        const phraseDiv = document.getElementById('phrase');
        const phraseUl = phraseDiv.firstElementChild;
        const phraseLength = this.phrase.length;

        for (const char of this.phrase) {
            const li = document.createElement('li');
            if (char === ' ') {
                li.className = 'space';
            }
            else {
                li.className = `hide letter ${char}`;
            }
            li.textContent = char;
            phraseUl.appendChild(li);
        }
     }

     /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
     checkLetter(letter) {
        for (const char of this.phrase) {
            if (char === letter) {
                return true;
            }
        }
        return false;
     };

     /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        let liWithLetter = document.getElementsByClassName(letter);
        for (let i = 0; i < liWithLetter.length; i++) {
            liWithLetter[i].classList.remove('hide');
            liWithLetter[i].classList.add('show');
        }
    };
     
 }