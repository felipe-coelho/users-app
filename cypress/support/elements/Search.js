const { get } = cy
export default class Search {
  static getSearchInput () {
    return get('[data-cy=input-search]')
  }
}
