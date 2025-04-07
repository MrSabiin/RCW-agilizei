/// <reference types="cypress" />

describe('Login', () => {
    it('Login', () => {

        cy.visit('https://demo.realworld.io/#/login')

        cy.get('input[type="email"]')
        .type(Cypress.env().user.email)

        cy.get('input[type="password')
        .type(Cypress.env().user.password)

        cy.get('button[type="submit"]')
        .click()
        
    });
});