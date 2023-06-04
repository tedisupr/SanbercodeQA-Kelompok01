import baseLogin from "../../support/pageObject/baseLogin.cy"

describe('M-001 - Modul Login & Logout', () => {
  const BaseLogin = new baseLogin()

  it('M-001.1: Berhasil login', () => {
    cy.visit('')
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.klikBtnLogin()
    BaseLogin.validasiBradcrumb()
    BaseLogin.validasiUrl()
  })
})