const { get } = cy
export default class Pagination {
  static getPagination () {
    return get('[data-cy=pagination]')
  }

  static getPreviousButton () {
    return this.getPagination()
      .find('.pagination__prev')
  }

  static getNextButton () {
    return this.getPagination()
      .find('.pagination__next')
  }

  static getPaginationNumber (index) {
    return this.getPagination()
      .find('[data-cy=pagination-number]')
      .eq(index)
  }
}
