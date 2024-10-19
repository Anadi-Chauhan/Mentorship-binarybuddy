// script.js
document.addEventListener("DOMContentLoaded", function () {
  const marquee = document.getElementById('marquee');
  const marqueeContainer = document.querySelector('.marquee-container');

  let speed = 3; // Control the speed of the scrolling
  let marqueeWidth = marquee.scrollWidth; // Total width of the content
  let currentPosition = 0; // Track current position of the marquee

  // Scroll function
  const scrollMarquee = () => {
    currentPosition -= speed;

    // If the content is fully out of view, reset its position
    if (Math.abs(currentPosition) >= marqueeWidth) {
      currentPosition = marqueeContainer.offsetWidth;
    }

    // Apply the current position to the transform property
    marquee.style.transform = `translateX(${currentPosition}px)`;

    // Request the next frame for smooth animation
    requestAnimationFrame(scrollMarquee);
  };

  // Start the scroll
  scrollMarquee();
});
