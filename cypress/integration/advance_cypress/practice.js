/// <reference types="Cypress" />
describe('GreenCart testing', ()=>{
    it('lec-13', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        // cy.get('.product').should('have.length', 4)
        cy.get('.product:visible').should('have.length', 4)
        cy.get('.products').find('.product').should('have.length', 4)
        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('.products').find('.product').each(function(element){
            const vegText = element.find('h4.product-name').text()
            if (vegText.includes('Carrot')) {
                element.find('button').click()
            }
        })
    })  
})