// https://api.unsplash.com/search/photos?client_id=qgmQVgRj6QQtdoAzzWoU9FKFFua7-Tk-3k_U9YNK3dQ&query=coffee&per_page=20

const API = 'https://api.unsplash.com'
const KEY = 'qgmQVgRj6QQtdoAzzWoU9FKFFua7-Tk-3k_U9YNK3dQ'

function getQueryString (params) {
  return params && Object.keys(params).length > 0 ? Object.keys(params).map(key => `${key}=${params[key]}`).join('&') : null
}

export default async function api (methods, url, param) {
  try {
    const queryString = getQueryString(param) ? `&${getQueryString(param)}` : ''
    const options = {
      method: methods ? methods.toUpperCase() : 'GET'
    }
    
    const response = await fetch(`${API}/${url}?client_id=${KEY}${queryString}`, options)

    console.log('[request]', response)

    if (response.status === 200) {
      const data = await response.json()
      return data
    }

  } catch (err) {
    console.log('[error request]', err)
    return err
  }
}

