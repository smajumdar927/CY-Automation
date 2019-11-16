/// <reference types="Cypress" />

describe('Automation Practice', ()=>{
    it('test 01', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('#email_create').type('abc321@gmail.com')
        cy.get('#SubmitCreate').click()
        cy.get('#id_gender1').click()
        cy.get('#customer_firstname').type('Rony')
        cy.get('customer_lastname').type('Majumdar')
        cy.get('#passwd').type('124578963')
        cy.get('select').select()
    });
})