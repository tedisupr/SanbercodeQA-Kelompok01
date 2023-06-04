import baseEditEmp from "../../support/pageObject/baseEditEmployee.cy"

describe('edit pegawai', () => {
  const BaseEditEmp = new baseEditEmp
  it('edit all field', () => {
    cy.login ()
    BaseEditEmp.AksesmenuPIM()
    BaseEditEmp.editEmp()
    BaseEditEmp.editNamaDepan()
    BaseEditEmp.editNamaTengah()
    BaseEditEmp.editNamaBelakang()
    BaseEditEmp.simpanData()
  })
})