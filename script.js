// IDLE TIMER
let timer,
  currSeconds = 0;
function resetTimer() {
  /* Hide the timer text */

  document.querySelector(".timertext").style.display = "none";

  /* Clear the previous interval */

  clearInterval(timer);

  /* Reset the seconds of the timer */

  currSeconds = 0;

  timer = setInterval(startIdleTimer, 1000);
}
window.onload = resetTimer;
window.onmousemove = resetTimer;
window.onmousedown = resetTimer;
window.ontouchstart = resetTimer;
window.onclick = resetTimer;
window.onkeypress = resetTimer;

function startIdleTimer() {
  /* Increment the 
                    timer seconds */

  currSeconds++;

  /* Set the timer text 
                    to the new value */

  document.querySelector(".secs").textContent = currSeconds;

  /* Display the timer text */

  document.querySelector(".timertext").style.display = "block";
}
setInterval(() => {
  if (currSeconds > 900) {
    location.href = "javascript:keeperLogOut()";
    location.href = "/session-end";
  }
}, 1000);
// Menu
// Get the modal
var modal = document.getElementById("Modal");

// Get the button that opens the modal
var btn = document.getElementById("Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
