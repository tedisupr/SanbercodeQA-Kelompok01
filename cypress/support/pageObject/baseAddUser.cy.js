const addUser = require('../../fixtures/addUser/addUser.json')

class baseAddUser{
    menuAdmin=':nth-child(1) > .oxd-main-menu-item'
    addUser='.orangehrm-header-container > .oxd-button'
    selectRole=':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    inputEmployee='.oxd-autocomplete-text-input > input' //dari json cari nama karyawan
    selectStatus=':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    username=':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password='.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
    confrpass=':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    btnSave='.oxd-button--secondary'
    btnCancel='.oxd-button--ghost'

    aksesMenuAdmin(){
        cy.klik(this.menuAdmin)
    }
    aksesAddUser(){
        cy.klik(this.addUser)
    }
    pilihRole(){
        cy.klik(this.selectRole)
        cy.contains('ESS').click()
    }
    cariEmployee(){
        cy.ketik(this.inputEmployee, addUser.cariPegawai)
        cy.contains('Anthony Nolan').click()
    }
    pilihStatus(){
        cy.klik(this.selectStatus)
        cy.contains('Disable').click()
    }
    inputUsername(){
        cy.ketik(this.username, addUser.username)
    }
    inputPassword(){
        cy.ketik(this.password, addUser.pass)
    }
    inputConfrm(){
        cy.ketik(this.confrpass, addUser.conf)
    }
    simpanData(){
        cy.klik(this.btnSave)
    }
    cancel(){
        cy.klik(this.btnCancel)
    }
    }
export default baseAddUser