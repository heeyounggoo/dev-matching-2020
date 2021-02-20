import Card from './Card.js'
import api from '../api/ api.js'
import {
  createElement
} from '../util/dom.js'

export default class CardList {
  constructor ($target) {
    this.el = createElement('section', {
      class: 'card-list'
    })
    $target.appendChild(this.el)
    
    this.getList()
  }

  getList () {
    api('get', 'search/photos', { query: 'cat', per_page: 20 })
      .then((data) => {
        this.cardList = data.results
        console.log('data:', data)
        this.render()
      })
  }

  setCardEl () {
    this.cardList.map(card => {
      new Card(this.el, card)
    })
  }

  render () {
  }
}