describe('Organization Edit Location', () => {
    it('M-008.1 Edit Location' , () => {
        cy.login()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click()
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
        cy.get(':nth-child(1)> .oxd-input').clear()
        cy.get(':nth-child(1)> .oxd-input').type('Japan')
        cy.get('.oxd-button--secondary').click()
    })
})