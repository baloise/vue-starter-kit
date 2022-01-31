import { byTestId } from '@baloise/design-system-testing'

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains(
      byTestId('title'),
      'Baloise Design System - Vue Starter Template',
    )
    cy.get(byTestId('counter')).contains('The count is at 0!')
    cy.get(byTestId('button')).contains('increment').click()
    cy.get(byTestId('counter')).contains('The count is at 1!')
  })
})
