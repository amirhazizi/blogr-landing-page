// variables
const navMenuBtn = document.querySelector(".nav-menu")
const navCloseBtn = document.querySelector(".nav-close")
const smallMenu = document.querySelector(".nav-fixed-menu")
const smallMenuBtns = document.querySelectorAll(".small-nav-btn")
const bignavBtns = document.querySelectorAll(".big-nav-btn")

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

// show option btn menus function
function navMenu(selection, action) {
  selection.forEach((btn) => {
    btn.addEventListener("click", () => {
      const menu = btn.parentElement.nextElementSibling
      const arrowImg = btn.nextElementSibling
      menu.classList.toggle(action)
      arrowImg.classList.toggle("rotate-arrow")
      btn.classList.toggle("actived-btn")
      selection.forEach((b) => {
        if (b !== btn) {
          b.parentElement.nextElementSibling.classList.remove(action)
          b.nextElementSibling.classList.remove("rotate-arrow")
        }
      })
      // timeout for unshow menu
      setTimeout(() => {
        menu.classList.remove(action)
        arrowImg.classList.remove("rotate-arrow")
      }, 2500)
    })
  })
}
