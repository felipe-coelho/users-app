import ResultsListElements from '../elements/ResultsList'

export default class ResultsListPO {
  static selectOptionOrderBy (index) {
    return ResultsListElements.getOrderBySelect()
      .select(index)
  }
}
