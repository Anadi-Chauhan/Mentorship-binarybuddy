// script.js

document.addEventListener("DOMContentLoaded", function () {
    const marquee = document.getElementById('marquee');
    const marqueeContainer = document.querySelector('.marquee-container');
  
    let speed = 1; // Control the speed of the scrolling
    let marqueeWidth = marquee.scrollWidth; // Total width of the content
    let containerWidth = marqueeContainer.offsetWidth;
  
    // Clone the content to create a continuous scroll effect
    const cloneContent = () => {
      const clonedContent = marquee.cloneNode(true);
      marquee.parentNode.appendChild(clonedContent);
    };
  
    cloneContent(); // Call it once to clone the content
  
    // Scroll function
    const scrollMarquee = () => {
      // Move the marquee content to the left
      marquee.style.transform = `translateX(${marquee.offsetLeft - speed}px)`;
  
      // If the marquee is out of view, reset its position
      if (marquee.offsetLeft <= -marqueeWidth) {
        marquee.style.transform = `translateX(${containerWidth}px)`;
      }
  
      // Request the next frame for smooth animation
      requestAnimationFrame(scrollMarquee);
    };
  
    scrollMarquee(); // Start scrolling
  });
  