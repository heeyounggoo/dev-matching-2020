export function createElement (tag, attrs) {
  const newTag = document.createElement(tag)
  
  if (attrs) {
    for (const attr in attrs) {
      newTag.setAttribute(attr, attrs[attr])
    }
  }

  return newTag
}