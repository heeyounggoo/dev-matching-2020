import {
  createElement
} from '../util/dom.js'

export default class Modal {
  constructor ({ target, data }) {
    this.card = data
    if (!document.querySelector('.modal-wrapper')) {
      this.el =  createElement('div', {
        class: 'modal-wrapper',
        tabIndex: 0
      })
      target.appendChild(this.el)
    } else { 
      this.el = document.querySelector('.modal-wrapper')
    }

    this.render()
  }

  setEvent () {
    this.el.querySelector('.close-btn').addEventListener('click', this.close.bind(this))
    document.addEventListener('keyup', this.close.bind(this))
  }

  removeEvent () {
    this.el.querySelector('.close-btn').removeEventListener('click', this.close.bind(this))
    document.removeEventListener('keyup', this.close.bind(this))
  }

  close (e) {
    if (e.type === 'click' || e.key == 'Esc') {
      this.el.classList.add('hidden')
      this.removeEvent()
    }
  }

  render () {
    this.el.innerHTML = ''
    this.el.classList.remove('hidden')
    
    const content = createElement('div', {
      class: 'modal-content'
    })
    const header = createElement('header', {
      class: 'modal-header'
    })
    const body = createElement('section', {
      class: 'modal-body'
    })

    header.innerHTML = `
      <button type="button" class="close-btn btn">X</button>
      <div class="user-info">
        <a class="user-img" href="${this.card.user.links.html}"><img src="${this.card.user.profile_image.small}"></a>
        <a class="user-name" href="${this.card.user.links.html}">${this.card.user.username}</a>
        <a href="${this.card.user.links.html}" class="user-id">@${this.card.user.username}</a>
      </div>
      <a class="download-btn btn" href="${this.card.links.download}">Download</a>
    `

    body.innerHTML = `
      <img src="${this.card.urls.small}"><img>
    `

    content.appendChild(header)
    content.appendChild(body)

    this.el.appendChild(content)

    this.setEvent()
  }
}