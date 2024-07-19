import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import GoogleSearchPage from '../../pages/GoogleSearchPage'

const googleSearchPage = new GoogleSearchPage()

Given('A web browser is at the Google homepage', () => {
  cy.visit('/')
})

When('A user enters a search term {string} and clicks on the search button', (searchTerm) => {
  googleSearchPage.search(searchTerm)
})

Then('The search results page will display results related to {string}', (searchTerm) => {
  cy.url().should('include', '/search')
  cy.get('body').should('contain', searchTerm)
})