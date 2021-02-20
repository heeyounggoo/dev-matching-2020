export function setItem (key, data) {
  if (!key || !data) return false
  
  console.log('[setItem - localStorage]', key, data)
  localStorage.setItem(key, JSON.stringify(data))
}

export function getItem (key) {
  if (!Object.prototype.hasOwnProperty.call(localStorage, key)) return false
  
  const value = localStorage.getItem(key)
  
  if (Object.prototype.toString.call(value) === '[object Object]') {
    return JSON.parse(value)
  } else {
    return value
  }
}

// export function onChange (callback) {
//   Storage.onChange = (e) => {
//     callback(e)
//   }
// }