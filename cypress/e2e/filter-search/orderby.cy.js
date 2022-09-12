import ResultsPO from '../../support/pageobjects/ResultslistPO'
import CardElements from '../../support/elements/CardResults'

describe('OrderBy', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('orders users list by name', () => {
    ResultsPO
      .selectOptionOrderBy(1)

    CardElements.getUserNameInCard(0)
      .should('contain', 'adelindo porto')
  })
})
