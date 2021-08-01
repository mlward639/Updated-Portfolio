//light mode

var modeSwitch = document.querySelector(".mode-switch");
var mode = true;

console.log("mode  : ", mode);

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
  var otherWorkDescription1 = document.querySelectorAll(
    ".other-work-description"
  );
  //otherWorkDescription1.classList.toggle("light-mode-description");
  otherWorkDescription1.forEach(function (element) {
    element.classList.toggle("light-mode-description");
  });
  //var otherWorkDescription2 = document.querySelector(".other-issue2");
  //otherWorkDescription2.classList.toggle("light-mode-description");
  //var otherWorkDescription3 = document.querySelector(".other-issue3");
  //otherWorkDescription3.classList.toggle("light-mode-description");
  //var otherWorkDescription4 = document.querySelector(".other-issue4");
  // otherWorkDescription4.classList.toggle("light-mode-description");
  //otherWorkDescription.classList.toggle("light-mode-description"); //why does querySelector only apply to the first light-mode-description, not the other 3 in the class??? and querySelectorAll doesnt apply to any of them (and causes JS error with toggle), review with tutor
  var profilePic = document.querySelector(".profile-pic");
  profilePic.classList.toggle("light-mode-pics");
  var mainWorkPic = document.querySelector(".main-work-pic");
  mainWorkPic.classList.toggle("light-mode-pics");
  var workPic1 = document.querySelector(".work-pic1");
  workPic1.classList.toggle("light-mode-pics");
  var workPic2 = document.querySelector(".work-pic2");
  workPic2.classList.toggle("light-mode-pics");
  var workPic3 = document.querySelector(".work-pic3");
  workPic3.classList.toggle("light-mode-pics");
  var workPic4 = document.querySelector(".work-pic4");
  workPic4.classList.toggle("light-mode-pics");
  if (mode === true) {
    mode = false;
    console.log("mode  : ", mode);
    modeSwitch.textContent = "Dark mode";
  } else if (mode === false) {
    mode = true;
    console.log("mode: ", mode);
    modeSwitch.textContent = "Light mode";
  }
}
