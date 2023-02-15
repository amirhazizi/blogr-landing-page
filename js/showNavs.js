// show option btn menus function
export default function navMenu(selection, action) {
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
      }, 4500)
    })
  })
}
