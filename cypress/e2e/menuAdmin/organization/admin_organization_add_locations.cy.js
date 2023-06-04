describe('Admin Organization', () => {
    it('M-007.1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.contains('Locations').click()
        cy.get('.oxd-button > .oxd-icon').click()

        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Tesla')

        cy.get('.oxd-select-text').click()
        cy.contains('Albania').click()

        cy.get('.oxd-button--secondary').click()

     })



     it('M-007.2', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.contains('Locations').click()
        cy.get('.oxd-button > .oxd-icon').click()

        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Tesla')


        cy.get('.oxd-button--secondary').click()

     })



     it('M-007.3', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.contains('Locations').click()
        cy.get('.oxd-button > .oxd-icon').click()


        cy.get('.oxd-select-text').click()
        cy.contains('Albania').click()

        cy.get('.oxd-button--secondary').click()

     })

     it('M-007.4', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.contains('Locations').click()
        cy.get('.oxd-button > .oxd-icon').click()



        cy.get('.oxd-button--secondary').click()
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text').should('be.visible')
        cy.get(':nth-child(4) > .oxd-input-group > .oxd-text').should('be.visible')

     })


        it('M-007.5', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.contains('Locations').click()
        cy.get('.oxd-button > .oxd-icon').click()

        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Tesla')

        cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Bandung')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jawa Barat')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('190')

        cy.get('.oxd-select-text').click()
        cy.contains('Albania').click()

        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('08999999')

        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0909')

        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Jl. Patimura')

        cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('blabla')

        cy.get('.oxd-button--secondary').click()

     })



     it('M-007.6', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.contains('Locations').click()
        cy.get('.oxd-button > .oxd-icon').click()

        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Tesla')

        cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Bandung')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jawa Barat')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('190')

        cy.get('.oxd-select-text').click()
        cy.contains('Albania').click()

        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('huruf')

        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0909')

        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Jl. Patimura')

        cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('blabla')

        cy.get('.oxd-button--secondary').click()
        cy.get(':nth-child(5) > .oxd-input-group > .oxd-text').should('be.visible')

     })



     it('M-007.7', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.contains('Locations').click()
        cy.get('.oxd-button > .oxd-icon').click()

        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('Tesla')

        cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Bandung')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jawa Barat')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('190')

        cy.get('.oxd-select-text').click()
        cy.contains('Albania').click()

        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('08999999')

        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('huruf')

        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Jl. Patimura')

        cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('blabla')

        cy.get('.oxd-button--secondary').click()
        cy.get(':nth-child(6) > .oxd-input-group > .oxd-text').should('be.visible')

     })




     it('M-007.8', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click()
        cy.contains('Locations').click()
        cy.get('.oxd-button > .oxd-icon').click()



        cy.get(':nth-child(2) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Bandung')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Jawa Barat')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('190')



        cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input').type('08999999')

        cy.get(':nth-child(6) > .oxd-input-group > :nth-child(2) > .oxd-input').type('0909')

        cy.get(':nth-child(7) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Jl. Patimura')

        cy.get(':nth-child(8) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('blabla')

        cy.get('.oxd-button--secondary').click()
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > .oxd-text').should('be.visible')
        cy.get(':nth-child(4) > .oxd-input-group > .oxd-text').should('be.visible')

     })

    
})