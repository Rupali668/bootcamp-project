// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

// Get the "Listen to Our Music" link and the Our Album section
const listenMusicLink = document.getElementById('listen-music');
const albumSection = document.getElementById('album');

// Add a click event listener to the "Listen to Our Music" link
listenMusicLink.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default link behavior

  // Apply the zoom-out effect to the Our Album section
  albumSection.classList.toggle('zoomed-out');
});