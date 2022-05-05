describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.getByTestId('title').contains(
      'Baloise Design System - Vue Starter Template',
    )
    cy.getByTestId('counter').contains('The count is at 0!')
    cy.getByTestId('button').contains('increment').click()
    cy.getByTestId('counter').contains('The count is at 1!')
  })
})
