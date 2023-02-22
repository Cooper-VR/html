// jshint esversion: 6
(function() {'use strict';

    /*
    This project is called Guess My Number!

    This game app is to help you deepen your knowledge and skills with DOM and Events.


    The goal of this project is to guess a secret number which is between 1 and 20.

    In the input box, the user can type a number and click Check.On the right side, the user gets a message that the guess was Too Low or Too High.

    The game starts with a Score of 20 and decreases by one for each failed attempt.

    When the user gets the correct number, there is a Correct number message and the screen turns green

    There is a Highscore feature which keeps track of the user's high score 

    The user can click the Again! button which resets everything except for the Highscore.
    */

    let randomNumber = Math.random(0, 20);

    const score = document.querySelector('#score');
    const check = document.querySelector('#checkButton');
    check.addEventListener("click", function(e){
        const guessElement = document.querySelector('#guessField');
        let guess = guessElement.;
        console.log(guess);
        score.textContent = score.textContent - 1;
    });
})();