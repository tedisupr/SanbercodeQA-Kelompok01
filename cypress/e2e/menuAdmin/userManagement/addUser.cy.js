import baseAddUser from "../../../support/pageObject/baseAddUser.cy"

describe(' M003: Modul  Admin - User Management - Users - Add User', () => {
  const BaseAddUser = new baseAddUser()

  it('M-003.001:Menambahkan pengguna dengan status role admin dan ess', () => {
    cy.login()
    BaseAddUser.aksesMenuAdmin() 
    BaseAddUser.aksesAddUser()
    BaseAddUser.pilihRole()
    BaseAddUser.cariEmployee()
    BaseAddUser.pilihStatus()
    BaseAddUser.inputUsername()
    BaseAddUser.inputPassword()
    BaseAddUser.inputConfrm()
    BaseAddUser.simpanData()
  })
})