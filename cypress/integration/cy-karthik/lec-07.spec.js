/// <reference types="Cypress" />
describe('Karthik Cypress tutorial',()=>{
    it('lecture 07', () => {
    cy.visit('http://www.eaapp.somee.com');
    cy.contains('Login').click();

    cy.url().should('include', '/Account/Login');
    cy.get('#UserName').type('admin');
    cy.get('#Password').type('password');

    cy.get('.btn').click({force:true});
    cy.contains('Employee List').click();
    //Table
    cy.get('.table').find('tr').contains('Ramesh').parent().contains('Benefits').click();
 });
});