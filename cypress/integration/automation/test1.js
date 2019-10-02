/// <reference types="Cypress" />

describe('My first Test Suit', ()=>{
 
    
    it('Navigate to URL', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        //here .classname and visible to collect visible object
        cy.get('.product:visible').should('have.length', 4)
     })

})