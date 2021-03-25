import { app } from '../support/app'

describe('Home Page', () => {
  const page = app.getHomePage()

  it('Visits the app root url', () => {
    page.open()

    page.button.get().click()
    page.button.get().click()

    cy.contains('h1', 'Home')
    cy.contains('p', '2')
  })
})
