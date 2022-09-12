const { get } = cy
export default class CardResults {
  static getCards () {
    return get('[data-cy=card-data]')
  }

  static getCardByIndex (index) {
    return this.getCards().eq(index)
  }

  static getUserNameInCard (index) {
    return this.getCardByIndex(index)
      .find('[data-cy=user-name]')
  }

  static getUserAddressInCard (index) {
    return this.getCardByIndex(index)
      .find('[data-cy=user-address]')
  }
}
