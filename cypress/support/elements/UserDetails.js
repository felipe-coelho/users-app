const { get } = cy

export default class UserDetails {
  static getCardUserData (index) {
    return get('[data-cy=card-data]').eq(index)
  }

  static getFieldFromCardUserData (cardIndex, fieldIndex) {
    return this.getCardUserData(cardIndex)
      .find('.fields')
      .eq(fieldIndex)
  }
}
