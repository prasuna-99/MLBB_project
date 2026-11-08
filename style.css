history.scrollRestoration = "manual";

const percentage = document.querySelector(".percentage");
const progress = document.querySelector(".progress");
const loader = document.querySelector(".loader");
const website = document.querySelector(".website");
const video = document.querySelector("#introVideo");
const videos = ["video/benedata.mp4", "video/kadita.mp4", "video/1.kagura.mp4"];
const randomIndex = Math.floor(Math.random() * videos.length);
/* mathiko Generate a random index to select a video from the array */
/* mathiko Math.floor() rounds down the random number to the nearest whole number, ensuring it is a valid index for the videos array. */
/* mathiko Math.random() generates a random number between 0 and 1. Multiplying it by videos.length gives a random index within the range of the array. */

const secondPart = document.querySelector(".second-part");

/*console.log(
  "Scroll position:",
  window.scrollY,
); /*tells us the document is scrolled approximately 2685 pixel down from the its starting position*/
/* 1,2 are used to debug the scroll restoration */
/* 2...console.log(
  "Second section position:",
  secondPart.getBoundingClientRect().top,
);secondPart.getBoundingClientRect().top = -300 means the top edge of the second section is 300px above the viewport.*/

const secondPartContent = document.querySelector(".second-part-content");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        secondPartContent.classList.add("show");

        observer.unobserve(secondPart);
      }
    });
  },
  {
    threshold: 0.4 /* the observer triggers when appoximately 50% of the section section is visible*/,
  },
  /*.second-part tells JavaScript when the user reaches the second section.*/
  /*.second-part-content is the element we actually want to animate.*/
);
let i = 0;

let loading = setInterval(() => {
  i++;

  percentage.textContent = i + "%"; /* Update the percentage text */
  progress.style.width = i + "%"; /* Update the width of the progress bar */

  if (i >= 100) {
    clearInterval(loading); /* Stop the loading when it reaches 100% */
    /* mathiko (loading) identifies the timer we want to stop, and clearInterval stops it*/
    loader.classList.add("hide"); /* Hide the loader */

    website.classList.add("show"); /* Show the website content */

    document.body.classList.remove(
      "loading",
    ); /* Remove the loading class from the body to allow scrolling */
    observer.observe(
      secondPart,
    ); /* once the animmation is tiggered thr observer stops watching thar section and makes the reveal happen */

    video.src = videos[randomIndex];
    /*mathiko Set the video source to a random video from the array */
    video.load(); /* Load the new video source */

    setTimeout(() => {
      video.currentTime = 0; /* Reset the video to the beginning */
      video.play(); /* Play the video */

      website.classList.add("reveal-title");
    }, 1000);
  }
}, 20); /* Set the interval to 50 milliseconds for a smooth loading effect */
