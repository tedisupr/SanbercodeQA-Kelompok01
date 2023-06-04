const editEmpData = require ('../../fixtures/editEmp/editEmpData.json')

class baseEditEmp{
    menuPIM=':nth-child(2) > .oxd-main-menu-item'
    btnEditEmp=':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2)'
    personalDetils=':nth-child(1) > .orangehrm-tabs-item'
    fldFirstName='.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'
    fldMiddleName=':nth-child(2) > :nth-child(2) > .oxd-input'
    fldLastname=':nth-child(3) > :nth-child(2) > .oxd-input'
    nikName=':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input'
    empId=':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    btnSave=':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'

    AksesmenuPIM(){
        cy.klik(this.menuPIM)
    }
    editEmp(){
        cy.klik(this.btnEditEmp)
    }
    menuPersonal(){
        cy.klik(this.personalDetils)
    }
    clearNamaDepan(){
        cy.kosongkan(this.fldFirstName)
    }
    editNamaDepan(){
        cy.ketik(this.fldFirstName, editEmpData.firstname)
    } 
    clearNamaTengah(){
        cy.kosongkan(this.fldMiddleName)
    }
    editNamaTengah(){
        cy.ketik(this.fldMiddleName, editEmpData.middlename)
    }  
    clearNamaBelakang(){
        cy.kosongkan(this.fldLastname)
    }
    editNamaBelakang(){
        cy.ketik(this.fldLastname, editEmpData.lastname)
    }
    namaPanggilan(){
        cy.ketik(this.nikName, editEmpData.nikName)
    }
    idPegawai(){
        cy.ketik(this.empId, editEmpData.pegawaiId)
    }
    simpanData(){
        cy.klik(this.btnSave)
    }
}

export default baseEditEmp
