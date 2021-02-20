import {
  createElement
} from '../util/dom.js'

export default class Card {
  constructor ($target, data) {
    this.card = data
    this.user = data.user
    this.el = createElement('figure', {
      class: 'card col'
    })
    $target.appendChild(this.el)
    this.render()
  }

  render () {
    const cardImg = createElement('img', {
      src: this.card.urls.small,
      class: 'card-img'
    })
    const figtureCaption = createElement('figureCaption', {
      class: 'figure-info'
    })
    
    figtureCaption.innerHTML = `
      <a class="user-img" href="${this.user.links.html}"><img src="${this.user.profile_image.small}"></a>
      <a class="user-name" href="${this.user.links.html}">${this.user.username}</a>
    `
    
    this.el.appendChild(cardImg)
    this.el.appendChild(figtureCaption)
  }
}