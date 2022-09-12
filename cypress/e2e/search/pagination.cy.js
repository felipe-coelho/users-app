import Pagination from '../../support/pageobjects/PaginationPO'
import PaginationElements from '../../support/elements/Pagination'

describe('Search Pagination', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('goes to next page', () => {
    Pagination.clickNextButton()

    PaginationElements.getPaginationNumber(1)
      .should('have.class', 'pagination__numbers--active')
  })

  it('goes to previous page', () => {
    Pagination.clickNextButton()

    Pagination.clickPreviousButton()

    PaginationElements.getPaginationNumber(0)
      .should('have.class', 'pagination__numbers--active')
  })

  it('checks previous button is disabled in first page', () => {
    PaginationElements.getPreviousButton()
      .should('be.disabled')
  })

  it('checks next button is disabled in last page', () => {
    Pagination.clickPaginationNumberButton(5)

    PaginationElements.getNextButton()
      .should('be.disabled')
  })
})
