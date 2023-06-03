import baseAddUser from "../../support/pageObject/baseAddUser.cy.js"

describe('Fungsionalitas Tambah User', () => {
  const BaseAddUser = new baseAddUser()

  it('berhasil tambah user', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
    baseAddUser.klikBtnLogin()
  })
})