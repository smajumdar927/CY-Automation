/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'

describe('Section 09 and Lec-41', ()=>{
 
    before(function(){
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })
it('first data driven test with fixture', function() {
  const homePage = new HomePage
  const productPage = new ProductPage

    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    homePage.name().type(this.data.name)
    homePage.selectGender().select(this.data.gender)
    homePage.clickShop().click()
    
    
this.data.productName.forEach(function(element) {
    cy.selectProduct(element)
})
productPage.checkOut().click()
cy.contains('Checkout').click()
cy.get('#country').type('India')
cy.get('.suggestions > ul > li > a').click()
cy.get('#checkbox2').click({force:true})
cy.get('input[type="submit"]').click()
cy.get('.alert').then(function(element){
    const actualText = element.text()
    expect(actualText.includes('Success')).to.be.true
})
})
    
})