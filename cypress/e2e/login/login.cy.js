import baseLogin from "../../support/pageObject/baseLogin.cy"

describe('Fungsionalitas Login', () => {
  const BaseLogin = new baseLogin()

  it('login_berhasil', () => {
    cy.visit('')
    BaseLogin.inputUsername()
    BaseLogin.inputPassword()
    BaseLogin.klikBtnLogin()
    BaseLogin.validasiBradcrumb()
    BaseLogin.validasiUrl()
  })
})