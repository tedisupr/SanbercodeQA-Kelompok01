describe('Modul  PIM - Add Employee', () => {
  it('M-011.1 ', () => {
    cy.login()
    cy.get(':nth-child(2) > .oxd-main-menu-item').click()
    cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
    cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click()
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Sharon')
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Daaneva')
    cy.get('.oxd-button--secondary').click({force:true})
  })
})