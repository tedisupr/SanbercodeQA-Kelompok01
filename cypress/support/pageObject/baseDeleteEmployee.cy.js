
class baseDeleteEmployee{
    aksesMenuPim=':nth-child(2) > .oxd-main-menu-item'
    btnHps1=':nth-child(2) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon'
    confHps='.orangehrm-modal-footer > .oxd-button--label-danger'
    checkBox1=':nth-child(2) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'
    checkBox2=':nth-child(3) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'
    checkbox3='.oxd-table-row > :nth-child(1) > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon'
    btnHps2='.orangehrm-horizontal-padding > div > .oxd-button'


    AksesMenuPim(){
        cy.klik(this.aksesMenuPim)
    }
    Hapus1(){
        cy.klik(this.btnHps1)
    }
    KonfirmasiHps(){
        cy.klik2(this.confHps)
    }
    pilih1(){
        cy.klik(this.checkBox1)
    }
    pilih2(){
        cy.klik(this.checkBox2)
    }
    pilih3(){
        cy.klik(this.checkbox3)
    }
    hapusPilih(){
        cy.klik(this.btnHps2)
    }
}
export default baseDeleteEmployee