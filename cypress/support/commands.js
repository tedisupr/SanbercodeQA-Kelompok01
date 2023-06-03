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
Cypress.Commands.add('ketik', (locator, value) => {
    cy.get(locator)
    .type(value)
})

Cypress.Commands.add('klik', (locator) => {
    cy.get(locator)
    .click()
})

// Cypress.Commands.select('select', (locator, value) => {
//     cy.get(locator)
//     .select(value)
//     .click()
// })


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