/// <reference types="Cypress" />

describe('My first Test Suit', ()=>{
 
    
    it('Navigate to URL', ()=>{
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        //here .classname and visible to collect visible object
        cy.get('.product:visible').should('have.length', 4)
        //Parent Child chaining
        cy.get('.products').as('productLocator') // .as('locator name') use as alias
        cy.get('@productLocator').find('.product').should('have.length', 4)
        //eq() helps to identify the desired index, then contains(text) helps to verify the text
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click()
     
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

    //Promises with then() method

    cy.get('.brand').then((brandlogo)=>{
        cy.log(brandlogo.text())
    })

    //Handleing Async Promises
    // Assert if logo text is correctly displayed
    cy.get('.brand').should('have.text', 'GREENKART')

})
})