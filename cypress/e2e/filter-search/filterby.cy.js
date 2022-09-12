import CardResultsElements from '../../support/elements/CardResults'
import CardResultsPO from '../../support/pageobjects/CardResultsPO'
import FiltersListPO from '../../support/pageobjects/FiltersListPO'
import FiltersList from '../../support/elements/FiltersList'
import UserDetails from '../../support/elements/UserDetails'

const { viewport, visit } = cy

describe('FilterBy', () => {
  beforeEach(() => {
    viewport(1201, 660)
    visit('/')
  })

  it('filters search result by state', () => {
    FiltersListPO.selectAFilterInlist(0, 0)

    CardResultsElements.getUserAddressInCard(0)
      .should('contain', 'santa catarina')
  })

  it('show more filters options', () => {
    FiltersList.getFilterlistItems(0)
      .filter(':visible')
      .should('have.length', 5)

    FiltersListPO.clickFiltersVisibilityButton(0)

    FiltersList.getFilterlistItems(0)
      .filter(':visible')
      .should('have.length', 23)
  })

  it('filters search result by gender', () => {
    FiltersListPO.selectAFilterInlist(1, 0)

    CardResultsPO.clickCard(0)

    UserDetails.getFieldFromCardUserData(0, 0)
      .should('contain', 'Feminino')
  })
})
