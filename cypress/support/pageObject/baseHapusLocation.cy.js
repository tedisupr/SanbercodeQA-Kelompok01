
class baseHapuslocation{
    menuAdmin=':nth-child(1) > .oxd-main-menu-item'
    menuOrganization=':nth-child(3) > .oxd-topbar-body-nav-tab-item'
    menuLocation='.oxd-dropdown-menu > :nth-child(2)'
    btnHapusLocation=':nth-child(2) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon'
  //  confirmHapus='.oxd-button--label-danger'
    checkBox1='.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'
    btnHapusDanger='.orangehrm-modal-footer > .oxd-button--label-danger'
    hapusCheckbox='.orangehrm-horizontal-padding > div > .oxd-button'
    checkall='.oxd-table-header > .oxd-table-row > :nth-child(1)'

    AksesMenuAdmin(){
        cy.klik(this.menuAdmin)
    }
    askesOrganisasi(){
        cy.klik(this.menuOrganization)
    }
    AksesMenuLocation(){
        cy.klik(this.menuLocation)
    }
    hapus1(){
        cy.klik(this.btnHapusLocation)
    }
    danger(){
        cy.klik2(this.btnHapusDanger)
    }
    CheckBox1(){
        cy.klik(this.checkBox1)
    }
    checBoxAll(){
        cy.klik2(this.checkall)
    }
    HapusCheckbox(){
        cy.klik(this.hapusCheckbox)
    }


}
export default baseHapuslocation 