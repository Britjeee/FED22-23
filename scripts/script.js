// JavaScript Document

// javascript voor hamburger menu toggle
var hamburgerMenu = document.querySelector("header nav > ul:nth-of-type(1) > li:nth-of-type(3) > button");

hamburgerMenu.addEventListener("click", menuToggle);

function menuToggle() {
    var menuInhoud = document.querySelector("header nav > ul:nth-of-type(2)");
    menuInhoud.classList.toggle("open");
}

// javascript voor feedback nieuwsbrief aanmelden
var aanmeldButton = document.querySelector("main > section:nth-of-type(4) button")

aanmeldButton.addEventListener("click", aanmeldenFeedback);

function aanmeldenFeedback() {
    var inputWaarde = document.querySelector("main > section:nth-of-type(4) input").value.indexOf("@");
    aanmeldenGelukt = "true"

    if (inputWaarde == -1) {
        alert("De e-mail die u heeft gebruikt is ongeldig. Probeer opnieuw!");
        aanmeldenGelukt = "false";
      }
    
      if (aanmeldenGelukt == "false") {
        alert("Vul een geldig e-mailadres in.");
        return false;
      }
      
      if (aanmeldenGelukt = "true") {
        alert("Gelukt! U ontvangt voortaan automatisch updates per mail van Moet Ik Naar De Dokter?");
      }
}





console.log(aanmeldButton);




// var menuButton = document.querySelector("header button");

// menuButton.addEventListener("click", menuToggle);

// function menuToggle() {
// 	var deNav = document.querySelector("header > nav");
	
// 	deNav.classList.toggle("open");
// }