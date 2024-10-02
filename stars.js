// Number of stars to create
const numStars = 600;
// Generate stars
for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 5 + 5}s`; // Randomize animation duration
    star.style.animationDelay = `${Math.random() * 0}s`; // Randomize animation delay
    document.getElementById('stars').appendChild(star);
}