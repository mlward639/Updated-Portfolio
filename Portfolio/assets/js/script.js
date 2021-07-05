

function lightMode() {
   var element = document.body;
   element.classList.toggle("light-mode");
   var contactLinks = document.querySelector(".link-color-issue");
   contactLinks.classList.toggle("light-mode-font");
}