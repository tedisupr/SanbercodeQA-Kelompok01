
class baseHapuslocation{
    menuAdmin=':nth-child(1) > .oxd-main-menu-item'
    menuOrganization=':nth-child(3) > .oxd-topbar-body-nav-tab-item'
    menuLocation='.oxd-dropdown-menu > :nth-child(2)'
    btnHapusLocation=':nth-child(2) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon'
    confirmHapus='.oxd-button--label-danger'
    checkBox1=':nth-child(2) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'
    btnHapusDanger='.oxd-button--label-danger'

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
        cy.klik(this.btnHapusDanger)
    }
    hapusCheckBox1(){
        cy.klik(this.checkBox1)
    }


}
export default baseHapuslocation 