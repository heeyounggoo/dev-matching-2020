import api from '../api/api.js'
import {
  createElement
} from '../util/dom.js'
import {
  setItem
} from '../util/localStorage.js'

export default class Search {
  constructor ($target) {
    this.el = createElement('header')
    $target.appendChild(this.el)

    this.render()
  }

  setEvent (target) {
    target.addEventListener('keypress', (e) => {
      if (e.code === 'Enter') {
        this.search = e.target.value
        api('get', 'search/photos', { query: this.search })
          .then((data) => {
            this.card = data.results
            setItem('data', this.card)
          })
      }
    })
  }
  
  render () {
    const input = createElement('input', {
      class: 'search',
      autofocus: true,
      placeholder: '이미지를 검색하세요'
    })

    this.el.appendChild(input)
    this.setEvent(input)
  }
}