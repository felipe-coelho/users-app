import CardResults from '../elements/CardResults'

export default class CardResultsPO {
  static clickCard (index) {
    return CardResults.getCardByIndex(index)
      .click()
  }
}
