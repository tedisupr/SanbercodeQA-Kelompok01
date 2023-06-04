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
    menuLain=':nth-child(1) > .oxd-main-menu-item'
    otherId=':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    driverLicense=':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
    
    
    
    AksesmenuPIM(){
        cy.klik(this.menuPIM)
    }
    editEmp(){
        cy.klik(this.btnEditEmp)
    }
    menuPersonal(){
        cy.klik(this.personalDetils)
    }
    editNamaDepan(){
        cy.ketik(this.fldFirstName, editEmpData.firstname)
    } 
    editNamaTengah(){
        cy.ketik(this.fldMiddleName, editEmpData.middlename)
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
    OtherId(){
        cy.ketik(this.otherId, editEmpData.invalidID)
    }
    DriverLicense(){
        cy.ketik(this.driverLicense, editEmpData.invalidDriver)
    }
    simpanData(){
        cy.klik(this.btnSave)
    }
    MenuLain(){
        cy.klik(this.menuLain)
    }
    //clear
    clearNamaDepan(){
        cy.kosongkan(this.fldFirstName)
    }
    clearNamaTengah(){
        cy.kosongkan(this.fldMiddleName)
    }
    clearNamaBelakang(){
        cy.kosongkan(this.fldLastname)
    }
    clearNamaPanggilan(){
        cy.kosongkan(this.nikName)
    }
    clearID(){
        cy.kosongkan(this.empId)
    }

}

export default baseEditEmp
