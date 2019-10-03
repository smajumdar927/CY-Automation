/// <reference types="Cypress" />

describe('My first Test Suit', ()=>{
 
    
    it('Navigate to URL', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        //here .classname and visible to collect visible object
        cy.get('.product:visible').should('have.length', 4)
        //Parent Child chaining
        cy.get('.products').find('.product').should('have.length', 4)
        //eq() helps to identify the desired index, then contains(text) helps to verify the text
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()
     
    //Grabbing text for validation
    
    cy.get('.products').find('.product').each((veg)=>{
        const textVeg =veg.find('h4.product-name').text()
        if (textVeg.includes('Cashews')) {
        veg.find('button').click()
    }
        
    
    })

})
})