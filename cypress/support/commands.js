// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

import baseLogin from "./pageObject/baseLogin.cy"

Cypress.Commands.add('ketik', (locator, value) => {
    cy.get(locator)
    .type(value)
})

Cypress.Commands.add('klik', (locator) => {
    cy.get(locator)
    .click({force: true})
})

Cypress.Commands.add('login', () => {
  const BaseLogin = new baseLogin()
  cy.visit('')
  BaseLogin.inputUsername()
  BaseLogin.inputPassword()
  BaseLogin.klikBtnLogin()
  BaseLogin.validasiBradcrumb()
  BaseLogin.validasiUrl()
})

// Cypress.Commands.add('checkbox',(locator)=>{
//   cy.get(locator)
//   .input('input[type="checkbox"]')
//   .check();
// })

// Cypress.Tasks.add('runCypress', ({ spec }) => {
//   const cypress = require('cypress');
//   const options = {
//     spec,
//     headless: true
// }});

//   return cypress.run(options);
// });

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })