describe('M-010: Modul PIM - Employee List', () => {
  it('M-010.1', () => {
    cy.login()
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Alice')
    cy.get('.oxd-form-actions > .oxd-button--secondary').click({force:true})
  })
})