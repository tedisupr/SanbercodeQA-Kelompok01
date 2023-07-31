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

  // it('M-001.2: Gagal login', () => {
  //   cy.visit('')
  //   BaseLogin.inputUsername()
  //   BaseLogin.klikBtnLogin()
  //   BaseLogin.validasipagelogin()
  // })

  // it('M-001.3: Gagal login', () => {
  //   cy.visit('')
  //   BaseLogin.inputPassword()
  //   BaseLogin.klikBtnLogin()
  //   BaseLogin.validasipagelogin()
  // })

  // it('M-001.4: Gagal login', () => {
  //   cy.visit('')
  //   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('sono')
  //   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('1111')
  //   cy.get('.oxd-button').click()
  //   BaseLogin.validasipagelogin()
  // })

  // it('M-001.5: Gagal login', () => {
  //   cy.visit('')
  //   BaseLogin.klikBtnLogin()
  //   BaseLogin.validasipagelogin()
  // })

  // it('M-001.6: Gagal login', () => {
  //   cy.visit('')
  //   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
  //   BaseLogin.inputPassword()
  //   BaseLogin.validasipagelogin()
  // })

  // it('M-001.7: Gagal login', () => {
  //   cy.visit('')
  //   BaseLogin.inputUsername()
  //   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
  //   BaseLogin.validasipagelogin()
  // })

})