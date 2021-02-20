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
    this.setEvent()
  }

  getList () {
    api('get', 'search/photos', { query: 'cat', per_page: 20 })
      .then((data) => {
        this.cardList = data.results
        this.render()
        setItem('data', this.cardList)
      })
  }

  setEvent () {
    window.addEventListener('storage', (e) => {
      console.log(e)
    })
  }

  render () {
    this.cardList.map(card => {
      new Card(this.el, card)
    })
  }
}