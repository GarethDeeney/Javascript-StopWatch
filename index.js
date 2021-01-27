// jshint esversion: 6

// Assisted wth guide by Mikke Goes Coding.

var startButton = document.querySelector(".start");
var stopButton = document.querySelector(".stop");
var resetButton = document.querySelector(".reset");
var changeTens = document.querySelector(".tens");
var changeSeconds = document.querySelector('.seconds');
var tens = 0;
var seconds = 0;
var interval;


startButton.addEventListener("click", function() {

  clearInterval(interval);
  interval = setInterval(startClock, 10);

});

stopButton.addEventListener("click", function() {
  stopClock();

});

resetButton.addEventListener("click", function() {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  changeTens.innerHTML = tens;
  changeSeconds.innerHTML = seconds;

});


function startClock() {

  tens++;

  // Checks tens, if higher than 99 starts seconds on clock
  if (tens < 9) {
    changeTens.innerHTML = "0" + tens;
  } else if (tens > 9) {
    changeTens.innerHTML = tens;
  }

  if (tens > 99)
  {
    seconds++;
    tens = 0;
    changeSeconds.innerHTML = "0" + seconds;
    changeTens.innerHTML = "0" + tens;
  }
  // checks seconds, if higher than 10, changes output
  if (seconds < 10) {
    changeSeconds.innerHTML = "0" + seconds;
  } else if (seconds > 9){
    changeSeconds.innerHTML = seconds;
  }
}

function stopClock()
{
// stops startClock function
clearInterval(interval);
}
