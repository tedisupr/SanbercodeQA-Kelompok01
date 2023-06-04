describe('LogOut', () => {
  it('M001-8 - Berhasil Log Out', () => {
    cy.login()
    cy.get('.oxd-userdropdown-tab').click({force:true})
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
  })
})