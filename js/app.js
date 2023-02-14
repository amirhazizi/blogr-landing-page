const navMenuBtn = document.querySelector(".nav-menu")
const navCloseBtn = document.querySelector(".nav-close")
const smallMenu = document.querySelector(".nav-fixed-menu")
const smallMenuBtns = document.querySelectorAll(".small-nav-btn")
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
smallMenuBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.nextElementSibling.classList.toggle("active-nav")
    btn.nextElementSibling.classList.toggle("rotate-arrow")
    smallMenuBtns.forEach((b) => {
      if (b !== btn) {
        b.parentElement.nextElementSibling.classList.remove("active-nav")
      }
    })
  })
})
