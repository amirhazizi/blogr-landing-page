const getElement = (selection) => {
  const element = document.querySelector(selection)
  if (element) return element
  else throw new Error(`please check "${selection}"`)
}
export default getElement
