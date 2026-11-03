const percentage = document.querySelector(".percentage");
const progress = document.querySelector(".progress");
const loader = document.querySelector(".loader");
const website = document.querySelector(".website");
const video = document.querySelector("#introVideo");

let i = 0;

let loading = setInterval(() => {
  i++;

  percentage.textContent = i + "%"; /* Update the percentage text */
  progress.style.width = i + "%"; /* Update the width of the progress bar */

  if (i >= 100) {
    clearInterval(loading); /* Stop the loading when it reaches 100% */
    /*(loading) identifies the timer we want to stop, and clearInterval stops it*/
    loader.classList.add("hide"); /* Hide the loader */
    website.classList.add("show"); /* Show the website content */

    setTimeout(() => {
      video.currentTime = 0; /* Reset the video to the beginning */
      video.play();

      website.classList.add("reveal-title");
    }, 1000);
  }
}, 50); /* Set the interval to 50 milliseconds for a smooth loading effect */
