import baseDeleteEmployee from "../../support/pageObject/baseDeleteEmployee.cy"


describe('M-003: Modul  PIM - Delete Employee', () => {
  const BaseDeleteEmployee = new baseDeleteEmployee()

  it('M-003.1 Menghapus 1 karyawan melalui tombol hapus', () => {
    cy.login()
    BaseDeleteEmployee.AksesMenuPim()
    BaseDeleteEmployee.Hapus1()
    BaseDeleteEmployee.KonfirmasiHps()
  })
  it('M-003.2 Menghapus 1 karyawan melalui checkbox', () => {
    cy.login()
    BaseDeleteEmployee.AksesMenuPim()
    BaseDeleteEmployee.pilih1()
    BaseDeleteEmployee.hapusPilih()
    BaseDeleteEmployee.KonfirmasiHps()
  })

  it('M-003.3 Menghapus 2 karyawan melalui checkbox', () => {
    cy.login()
    BaseDeleteEmployee.AksesMenuPim()
    BaseDeleteEmployee.pilih1()
    BaseDeleteEmployee.pilih2()
    BaseDeleteEmployee.hapusPilih()
    BaseDeleteEmployee.KonfirmasiHps()
  })
  it('M-003.4 Menghapus semua karyawan melalui checkbox', () => {
    cy.login()
    BaseDeleteEmployee.AksesMenuPim()
    BaseDeleteEmployee.pilih3()
    BaseDeleteEmployee.hapusPilih()
    BaseDeleteEmployee.KonfirmasiHps()
  })
})