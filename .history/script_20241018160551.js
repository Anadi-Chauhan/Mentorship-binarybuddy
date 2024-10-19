// script.js
document.addEventListener("DOMContentLoaded", function () {
  const marquee = document.getElementById('marquee');
  const marqueeClone = document.getElementById('marquee-clone');
  const marqueeContainer = document.querySelector('.marquee-container');

  let speed = 2; // Control the speed of the scrolling
  let currentPosition = 0; // Track current position of the marquee

  // Clone the marquee content width so that we can repeat the loop seamlessly
  const marqueeWidth = marquee.scrollWidth;

  // Function to scroll the marquee
  const scrollMarquee = () => {
    currentPosition -= speed;

    // When the entire marquee has scrolled out of view, reset its position
    if (Math.abs(currentPosition) >= marqueeWidth) {
      currentPosition = 0;
    }

    // Apply the current position to both marquee and its clone
    marquee.style.transform = `translateX(${currentPosition}px)`;
    marqueeClone.style.transform = `translateX(${currentPosition + marqueeWidth}px)`;

    // Call this function for the next animation frame
    requestAnimationFrame(scrollMarquee);
  };

  // Start the scroll
  scrollMarquee();
});
