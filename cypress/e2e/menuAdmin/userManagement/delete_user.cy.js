describe('User Menangement Delete', () => {
    it('M-005.1 Delete User menggunakan button delete selected' , () => {
     cy.login()
     cy.get(':nth-child(1) > .oxd-main-menu-item').click()
     cy.get(':nth-child(3) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
     cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({force:true})
     cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click()
     cy.wait(100)
    })

    it('M-005.2 Batal Delete User menggunakan button delete selected' , () => {
        cy.login()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(4) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({force:true})
        cy.wait(100)
        cy.get('.oxd-button--text').click()
    })

    it('M-005.3 Delete User menggunakan icon trash' , () => {
        cy.login()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
        cy.get(':nth-child(2) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({force:true})
    })

    it('M-005.4 Batal Delete menggunakan icon trash' , () => {
        cy.login()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(3) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
        cy.get(':nth-child(3) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click({force:true})
        cy.get('.oxd-button--text').click({force:true})
    })
    
    it('M-005.5 Hapus semua user menggunakan Delete Selected' , () => {
        cy.login()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
        cy.get('.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click({force:true})
        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click({force:true})
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click({force:true})
    })
})