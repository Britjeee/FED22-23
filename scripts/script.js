// JavaScript Document
var hamburgerMenu = document.querySelector("header nav > ul:nth-of-type(1) > li:nth-of-type(3) > button");

hamburgerMenu.addEventListener("click", menuToggle);

function menuToggle() {
    var menuInhoud = document.querySelector("header nav > ul:nth-of-type(2)");
    menuInhoud.classList.toggle("open");
}

console.log("hi");




// var menuButton = document.querySelector("header button");

// menuButton.addEventListener("click", menuToggle);

// function menuToggle() {
// 	var deNav = document.querySelector("header > nav");
	
// 	deNav.classList.toggle("open");
// }