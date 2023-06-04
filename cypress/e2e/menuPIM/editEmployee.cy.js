import baseEditEmp from "../../support/pageObject/baseEditEmployee.cy"

describe('edit pegawai', () => {
  const BaseEditEmp = new baseEditEmp
  it('edit all field', () => {
    cy.login ()
    BaseEditEmp.AksesmenuPIM()
    BaseEditEmp.editEmp()
    BaseEditEmp.menuPersonal()
    BaseEditEmp.clearNamaDepan()
    BaseEditEmp.editNamaDepan()
    BaseEditEmp.clearNamaTengah()
    BaseEditEmp.editNamaTengah()
    BaseEditEmp.clearNamaBelakang()
    BaseEditEmp.editNamaBelakang()
    BaseEditEmp.namaPanggilan()
    BaseEditEmp.idPegawai()
    BaseEditEmp.simpanData()
  })
})