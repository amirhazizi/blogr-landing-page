const getElements = (selection) => {
  const elements = document.querySelectorAll(selection)
  if (elements) return elements
  else throw new Error(`please check "${selection}"`)
}
export default getElements
