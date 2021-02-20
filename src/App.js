import Search from './component/Search.js'
import CardList from './component/CardList.js'

export default class App {
  constructor ($target) {
    const search = new Search($target)
    const cardList = new CardList($target)
  }
}