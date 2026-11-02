const percentage = document.querySelector(".percentage");
const progress = document.querySelector(".progress");
const loader = document.querySelector(".loader");

let i = 0;

let loading = setInterval(() => {
  i++;

  percentage.textContent = i + "%"; /* Update the percentage text */
  progress.style.width = i + "%"; /* Update the width of the progress bar */

  if (i >= 100) {
    clearInterval(loading); /* Stop the loading when it reaches 100% */
    /*(loading) identifies the timer we want to stop, and clearInterval stops it*/
    loader.classList.add("hide"); /* Hide the loader */
  }
}, 50); /* Set the interval to 50 milliseconds for a smooth loading effect */
