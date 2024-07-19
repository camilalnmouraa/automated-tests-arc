class GoogleSearchPage {
  constructor() {
    this.selectors = {
      searchInput: 'textarea[name="q"]',
      searchBtn: 'input[name="btnK"]'
    }
  }

  getSearchInput() {
    return cy.get(this.selectors.searchInput)
  }

  getSearchBtn() {
    return cy.get(this.selectors.searchBtn)
  }

  typeSearchTerm(searchTerm) {
    this.getSearchInput().type(searchTerm)
  }

  clickSearch() {
    this.getSearchInput().type('{enter}')
  }

  search(searchTerm) {
    this.typeSearchTerm(searchTerm)
    this.clickSearch()
  }
}

export default GoogleSearchPage