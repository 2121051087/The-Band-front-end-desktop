const slider = document.getElementById("slider");
const sliders = slider.getElementsByClassName("sliders");
let currentIndex = 0;

function showNextContent() {
  sliders[currentIndex].style.display = "none"; 
  currentIndex = (currentIndex + 1) % sliders.length; 
  sliders[currentIndex].style.display = "block";
}

setInterval(showNextContent, 3000); 


sliders[currentIndex].style.display = "block";
