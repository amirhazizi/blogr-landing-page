import get from "./utils/_getElement.js"
import gets from "./utils/_getElements.js"
import navMenu from "./showNavs.js"
// variables
const navMenuBtn = get(".nav-menu")
const navCloseBtn = get(".nav-close")
const smallMenu = get(".nav-fixed-menu")
const smallMenuBtns = gets(".small-nav-btn")
const bignavBtns = gets(".big-nav-btn")

// active and deactive nav menus
navMenu(smallMenuBtns, "active-nav")
navMenu(bignavBtns, "active-big-nav")

// show and unshow menu and menubtn
navMenuBtn.addEventListener("click", () => {
  smallMenu.classList.add("active")
  navMenuBtn.classList.add("unshow")
  navCloseBtn.classList.remove("unshow")
})
navCloseBtn.addEventListener("click", () => {
  smallMenu.classList.remove("active")
  navMenuBtn.classList.remove("unshow")
  navCloseBtn.classList.add("unshow")
})
