

var menuIcon = document.querySelector(".menu_icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidbar");
    container.classList.toggle("large_container");
}
const image = document.getElementById('imageElement');
const video = document.getElementById('videoElement');

image.addEventListener('click', function() {
  image.style.display = 'none';  
  video.style.display = 'block'; 
  video.play();                  
});
document.getElementById('videoElement').addEventListener('click', function() {
    let video = this;

    // Check if the browser supports fullscreen API
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari, and Opera
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { 
        video.msRequestFullscreen();
    }
});