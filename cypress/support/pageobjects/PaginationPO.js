import PaginationElements from '../elements/Pagination'

export default class PaginationPO {
  static clickPreviousButton () {
    return PaginationElements.getPreviousButton()
      .click()
  }

  static clickNextButton () {
    return PaginationElements.getNextButton()
      .click()
  }

  static clickPaginationNumberButton (index) {
    return PaginationElements.getPaginationNumber(index)
      .click()
  }
}
