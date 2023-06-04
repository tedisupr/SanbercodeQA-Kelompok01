describe('Edit Users', () => {
    it('M-004.1', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force:true})
      cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
      cy.contains('ESS').click()
      cy.get('.oxd-button--secondary').click()
    })

    it('M-004.2', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force:true})
      cy.get('.oxd-button--secondary').click() 
    })


    it('M-004.3', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force:true})
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
      cy.contains('Enabled').click()
      cy.get('.oxd-button--secondary').click() 
    })


    it('M-004.4', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force:true})
      cy.get('.oxd-autocomplete-text-input > input').clear()
      cy.get('.oxd-autocomplete-text-input > input').type('Lisa  Andrews')
      cy.wait(1000)
      cy.get('.oxd-autocomplete-text-input > input').click()
      cy.get('.oxd-button--secondary').click() 
    })


      it('M-004.5', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force:true})
      cy.get(':nth-child(2) > .oxd-input').clear()
      cy.get(':nth-child(2) > .oxd-input').type('irsyad')
      cy.get('.oxd-button--secondary').click()
    })


      it('M-004.6', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force:true})
        cy.get(':nth-child(2) > .oxd-input').clear()
        cy.get(':nth-child(2) > .oxd-input').type('asd')
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  
    })


          it('M-004.7', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force:true})
        cy.get(':nth-child(2) > .oxd-input').clear()
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-input-group > .oxd-text').should('be.visible')
  
    })

    it('M-004.8', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force:true})
      cy.get('.oxd-checkbox-input > .oxd-icon').click()
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("irsyad!123")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("irsyad!123")
      cy.get('.oxd-button--secondary').click()
  
    })

    it('M-004.9', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/')
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
      cy.get('.oxd-button').click()
      cy.get(':nth-child(1) > .oxd-main-menu-item').click()
      cy.get(':nth-child(1) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)').click({force:true})
      cy.get('.oxd-checkbox-input > .oxd-icon').click()
      cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type("irsy")
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("irsy")
      cy.get('.oxd-input-group > .oxd-text').should('be.visible')
      cy.get('.oxd-button--secondary').click()
      
  
    })




    


})