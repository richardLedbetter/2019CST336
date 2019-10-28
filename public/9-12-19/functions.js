  var randomNumber = Math.floor(Math.random() * 99) + 1;
  var guesses = document.querySelector('#guesses');
  var lastResult = document.querySelector('#lastResult');
  var lowOrHi = document.querySelector('#lowOrHi');
  var won = document.querySelector('#won');
  var lost = document.querySelector('#lost');

  var guessSubmit = document.querySelector('.guessSubmit');
  var guessField = document.querySelector('.guessField');

  var guessCount = 1;
  var wonCount = 1;
  var lostCount = 1;
  var resetButton = document.querySelector('#reset');
  guessField.focus();
  resetButton.style.display = 'none';

  function checkGuess() {
      var userGuess = Number(guessField.value);

      if (guessCount === 1) {
          guesses.innerHTML = "Previous guesses: ";
      }

      if (userGuess <= 99 || userGuess > 1) {
          guesses.innerHTML += userGuess + ' ';

          if (userGuess === randomNumber) {
              lastResult.innerHTML = 'Congratulations! You got it right!';
              lastResult.style.backgroundColor = 'green';
              lowOrHi.innerHTML = '';
              setGameOver();
              won.innerHTML = 'Won: ' + wonCount++;
              $("#won").css('color', 'green');
          }
          else if (guessCount === 7) {
              lastResult.innerHTML = 'Sorry, you lost!';
              setGameOver();
              lost.innerHTML = 'Lost: ' + lostCount++;
              lost.style.backgroundColor = 'red';
          }
          else {
              lastResult.innerHTML = 'Wrong!';
              lastResult.style.backgroundColor = 'red';
              if (userGuess < randomNumber) {
                  lowOrHi.innerHTML = 'Last guess was too low!';
              }
              else if (userGuess > randomNumber) {
                  lowOrHi.innerHTML = 'Last guess was too high!';
              }
          }

          guessCount++;
          guessField.value = '';
          guessField.focus();
      }

      else {
          lastResult.innerHTML = 'Only numbers from 1 to 99. Try again.';
          lastResult.style.backgroundColor = 'red';
      }
  }
  console.log(randomNumber);
    
    
    $(document).ready(function() {
          $(".guessSubmit").click(function() {
              checkGuess();
              //console.log("reset clicked")
          });
      });
  //guessSubmit.addEventListener('click', checkGuess);

  function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton.style.display = 'inline';
      $(document).ready(function() {
          $("#reset").click(function() {
              resetGame();
              console.log("reset clicked")
          });
      });
  }

  function resetGame() {
      guessCount = 1;

      var resetParas = document.querySelectorAll('.resultParas p');
      for (var i = 0; i < resetParas.length; i++) {
          resetParas[i].textContent = '';

      }

      resetButton.style.display = 'none';

      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value = '';
      guessField.focus();

      lastResult.style.background = 'white';
      won.style.background = 'gainsboro';
      lost.style.background = 'gainsboro';

      randomNumber = Math.floor(Math.random() * 99) + 1;
  }
  