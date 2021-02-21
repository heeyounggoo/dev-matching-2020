import Card from './Card.js'
import api from '../api/api.js'
import {
  createElement
} from '../util/dom.js'
import {
  setItem
} from '../util/localStorage.js'

export default class CardList {
  constructor ($target) {
    this.el = createElement('section', {
      class: 'card-list row'
    })
    $target.appendChild(this.el)
    
    this.getList()
  }

  getList () {
    api('get', 'search/photos', { query: 'cat', per_page: 20 })
      .then((data) => {
        this.card = data.results
        this.render()
        setItem('data', this.card)
      })
  }

  setState (key, data) {
    this[key] = data
    this.render()
  }

  render () {
    this.el.innerHTML = ''
    if (this.card.length > 0) {
      this.card.map(item => {
        new Card(this.el, item)
      })
    } else {
      this.el.innerHTML = `<p>조회 결과가 없습니다.</p>`
    }
  }
}