describe('User can add order 2 pizza Margarita', () => {
  before(() => {
    cy.visitBalApp('/')
  })
  it('Click add button of the pizza Margarita card', () => {
    cy.getByTestId('pizza-card__add-margherita').click().click()
  })
  it('Verify the total of the cart for 2 pizzas', () => {
    cy.getByTestId('cart-total').contains('CHF 32.00')
  })
  it('Checkout the order', () => {
    cy.getByTestId('cart-checkout').click()
    cy.url().should('include', '/checkout')
  })
  it('Add contact information', () => {
    cy.getByTestId('field-contact.firstName').type('John')
    cy.getByTestId('field-contact.lastName').type('Doe')
  })
  it('Add delivery address information', () => {
    cy.getByTestId('field-deliveryAddress.street').type('Street')
    cy.getByTestId('field-deliveryAddress.streetNumber').type('42')
    cy.getByTestId('field-deliveryAddress.postalCode').type('1234')
    cy.getByTestId('field-deliveryAddress.city').type('Gotham')
  })
  it('Submit order', () => {
    cy.getByTestId('checkout-submit').click()
    cy.balToastFind().first().contains('Successfully submitted order.')
    cy.url().should('include', '/')
  })
})
