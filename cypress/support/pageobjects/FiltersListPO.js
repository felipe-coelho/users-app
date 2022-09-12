import FiltersListElements from '../elements/FiltersList'

export default class FiltersListPO {
  static selectAFilterInlist (listIndex, filterIndex) {
    return FiltersListElements.getAFilterInlist(listIndex, filterIndex)
      .click()
  }

  static clickFiltersVisibilityButton (index) {
    return FiltersListElements.getFiltersVisibilityButton(index)
      .click()
  }
}
