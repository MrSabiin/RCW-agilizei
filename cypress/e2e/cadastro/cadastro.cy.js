/// <reference types="cypress" />

const faker = require('faker')
describe('Cadastro', () => {
    it('Cadastro de usuário', () => {
        
        cy.visit('https://demo.realworld.io/#/register')

        cy.get('input[ng-model="$ctrl.formData.username"]')
        .type(faker.name.firstName() + faker.name.lastName())
        
        cy.get('input[ng-model="$ctrl.formData.email"]')
        .type(faker.internet.email())

        cy.get('input[ng-model="$ctrl.formData.password"]')
        .type('12345678.Abc')

        cy.get('button[type="submit"]')
        .click()
    });
});