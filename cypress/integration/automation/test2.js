/// <reference types="Cypress" />

describe('My first Test Suit', ()=>{
 
    
    it('Navigate to URL', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
       
        //Parent Child chaining
        cy.get('.products').as('productLocator') // .as('locator name') use as alias
          
    //Grabbing text for validation
    
    cy.get('@productLocator').find('.product').each((veg)=>{
        const textVeg =veg.find('h4.product-name').text()
        if (textVeg.includes('Cashews'))
         {
        veg.find('button').click()
    }

    })

    cy.get('@productLocator').find('.product').each((veg1, index, $list)=>{
        const textVeg1 = veg1.find('h4.product-name').text()

        if (textVeg1 === 'Capsicum') {
          veg1.find('button').click()  
        } 
    })

    cy.get('.cart-icon').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()


})
})