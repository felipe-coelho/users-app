import SearchElements from '../../support/elements/Search'
import ResultsElements from '../../support/elements/ResultsList'
import CardElements from '../../support/elements/CardResults'

describe('Search', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('do search that return results', () => {
    const searchTerm = 'jesus'
    SearchElements.getSearchInput()
      .type(`${searchTerm}{enter}`)

    CardElements.getUserNameInCard(0)
      .should('contain', searchTerm)

    CardElements.getCards()
      .should('have.length', 2)
  })

  it('do search that return no results', () => {
    SearchElements.getSearchInput()
      .type('asdfg{enter}')

    ResultsElements.getNoResultsMessage()
      .should('be.visible')
  })

  it('do search in details page', () => {
    CardElements.getCardByIndex(0)
      .click()

    SearchElements.getSearchInput()
      .type('jesus{enter}')

    cy.location('pathname')
      .should('not.contain', 'details')
  })
})
