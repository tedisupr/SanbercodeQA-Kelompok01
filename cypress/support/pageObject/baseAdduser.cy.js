const addUserData = require('../../fixtures/addUser/addUser.json')

class baseAddUser {
    btnAdd = '.orangehrm-header-container > .oxd-button'
    selectRole = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    empName = '.oxd-autocomplete-text-input > input'
    statusUser = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text'
    Username = ':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'
    Pass = '.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'
    ConfrPass = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    btnSave = '.oxd-button--secondary'
    btnCancel = '.oxd-button--ghost'

    BtnAdd(){
        cy.klik(this.btnAdd)
    }

    SelectRole(){
        cy.select(this.selectRole).select(addUserData.role)
    }
 
    InputEmpName(){
        cy.ketik(this.username, addUserData.empName)
    }
    
    SelectStatusUser(){
        cy.select(this.selectRole).select(addUserData.status)
    }

    InputUsername(){
        cy.ketik(this.Username, addUserData.username)
    }

    InputPass(){
        cy.ketik(this.Pass, addUserData.username)
    }

    InputConfirmPass(){
        cy.ketik(this.ConfrPass, addUserData.confirPass)
    }

    BtnSave(){
        cy.klik(this.btnSave)
    }

    BtnCancel(){
        cy.klik(this.btnCancel)
    }

}
export default baseAddUser
