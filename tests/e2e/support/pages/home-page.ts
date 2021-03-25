import { ButtonAccessor, dataTestSelector } from '@baloise/ui-library-testing'

export class HomePage {
  button = ButtonAccessor(dataTestSelector('button-count'))

  open() {
    cy.visit('/')
  }
}
