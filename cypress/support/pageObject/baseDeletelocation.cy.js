class baseDeletelocation{
    btnHps=':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon'
    btnHpsSelect='.orangehrm-horizontal-padding > div > .oxd-button'
    confrmHps='.oxd-button--label-danger'
    checkBoxHps=':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'
    allCheckBoxHps='.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'
    
    del1(){
        cy.klik(this.btnHps)
    }
    delConfrm(){
        cy.klik(this.confrmHps)
    }
    del1Selected(){
        cy.klik(this.checkBoxHps)
    }
    del2(){
        cy.klik(this.btnHpsSelect)
    }
    del2Selected(){
        cy.klik(this.allCheckBoxHps)
    }
}
export default baseDeletelocation