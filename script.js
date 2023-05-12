let activeTabs = document.getElementsByClassName("tabLinks");

// Adding MouseOver effect
function mouseOvering() {
  for (const activeTab of activeTabs) {
    activeTab.classList.remove("activeLink");
  }
  event.currentTarget.classList.add("activeLink");
}

// Small screen nav toggle

let navToggle = document.getElementById("menu-icon");
let navLinks = document.getElementById("navLinks");
let mockups = document.getElementById("mockUp");
let heroSegment = document.getElementById("heroSegment");

function navOpen() {
  if (navLinks.style.display == "none") {
    navLinks.style.display = "block";
    navToggle.src = "./images/icon-close.svg";
    mockups.style.display = "none";
    heroSegment.style.backgroundColor = "#00000033";
  } else {
    navLinks.style.display = "none";
    navToggle.src = "./images/icon-hamburger.svg";
    mockups.style.display = "block";
    heroSegment.style.backgroundColor = "";
  }
}
