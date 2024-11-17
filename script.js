
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });


const listenMusicLink = document.getElementById('listen-music');
const albumSection = document.getElementById('album');


listenMusicLink.addEventListener('click', function (e) {
  e.preventDefault(); 

  //zoom out
  albumSection.classList.toggle('zoomed-out');
});
