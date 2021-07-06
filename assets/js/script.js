var modeSwitch = document.querySelector(".mode-switch")
var mode = true;

console.log("mode  : ", mode)

function lightMode() {
   var element = document.body;
   element.classList.toggle("light-mode");
   var navbarContainer = document.querySelector(".navbar-container");
   navbarContainer.classList.toggle("light-mode-other");
   var aboutMeContainer = document.querySelector(".about-me");
   aboutMeContainer.classList.toggle("light-mode-other");
   var contactMeContainer = document.querySelector(".contact-me-container");
   contactMeContainer.classList.toggle("light-mode-other");
   var mainWorkDescription = document.querySelector(".main-work-description");
   mainWorkDescription.classList.toggle("light-mode-description");
   var otherWorkDescription = document.getElementsByClassName("other-work-description");
   otherWorkDescription.classList.toggle("light-mode-description"); //why does querySelector only apply to the first light-mode-description, not the other 3 in the class??? and querySelectorAll doesnt apply to any of them (and causes JS error with toggle)
   var profilePic = document.querySelector(".profile-pic");
   profilePic.classList.toggle("light-mode-pics");
   var mainWorkPic = document.querySelector(".main-work-pic");
   mainWorkPic.classList.toggle("light-mode-pics");
   var workPic = document.querySelector(".work-pic");
   workPic.classList.toggle("light-mode-pics");
   if (mode === true){
       mode = false;
       console.log("mode  : ", mode);
       modeSwitch.textContent = "Dark mode";
   } else if (mode === false){
       mode = true;
       console.log("mode: ", mode)
       modeSwitch.textContent = "Light mode";
   }
}