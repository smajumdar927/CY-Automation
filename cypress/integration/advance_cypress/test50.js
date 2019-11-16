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
it('Grab integer from string', function() {
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
cy.get('tr td:nth-child(4) strong').each(function($el){
    // cy.log($el.text())
    const actualText = $el.text()//grab the element text() and store in a variable
    var res = actualText.split(" ")//split() the actual text by space & store in a var
    //here is the formula
    //the Prcie text will be ₹. 65000	
    // split by space
    //res[0]= ₹.
    //res[1]= 65000	
    res = res[1].trim()//trim() will grab actual number
    cy.log(res)
})


})        
})