const { get } = cy
export default class ResultsList {
  static getNoResultsMessage () {
    return get('[data-cy=no-results]')
  }

  static getOrderBySelect () {
    return get('[data-cy="select-orderby"]')
  }
}
