const { get } = cy
export default class FiltersList {
  static getFiltersList (index) {
    return get('[data-cy=filters-list]')
      .eq(index)
  }

  static getFilterlistItems (index) {
    return this.getFiltersList(index)
      .find('ul.filters-list li')
  }

  static getAFilterInlist (listIndex, filterIndex) {
    return this.getFilterlistItems(listIndex)
      .eq(filterIndex)
      .find('input')
  }

  static getFiltersVisibilityButton (index) {
    return this.getFiltersList(index)
      .find('[data-cy=filters-visibility] a')
  }
}
