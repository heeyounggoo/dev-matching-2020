import {
  createElement
} from '../util/dom.js'

export default class Card {
  constructor ($target, data) {
    this.card = data
    this.el = createElement('figure')
    $target.appendChild(this.el)
    this.render()
  }

  render () {
    const figtureCaption = createElement('figureCaption', {
      class: 'figure-info'
    })
    this.el.appendChild(figtureCaption)
  }
}