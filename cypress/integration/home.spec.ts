describe('My First Test', () => {
  let home

  beforeEach(function () {
    cy.fixture('home').then((homeJson) => (home = homeJson))
  })

  it('Visits the app root url', () => {
    cy.visit('/')
    cy.getByTestId('title').contains(home.title)
    cy.getByTestId('counter').contains('The count is at 0!')
    cy.getByTestId('button').contains('increment').click()
    cy.getByTestId('counter').contains('The count is at 1!')
  })
})
