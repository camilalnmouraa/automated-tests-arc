Feature: Google Search

  Background:
    Given A web browser is at the Google homepage

  Scenario: Simple Search
    When A user enters a search term "Cypress testing framework" and clicks on the search button
    Then The search results page will display results related to "Cypress testing framework"