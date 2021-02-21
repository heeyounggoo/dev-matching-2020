import {
  createElement
} from '../util/dom.js'

export default class Loading {
  constructor (target) {
    this.el = createElement('div', {
      class: 'loading-wrapper'
    })

    target.appendChild(this.el)
  }

  render () {}
}