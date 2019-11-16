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
it('Sum of product functionality', function() {
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
var sum = 0
cy.get('tr td:nth-child(4) strong').each(function($el){
    const actualText = $el.text()
    var res = actualText.split(" ")
    res = res[1].trim()
    sum = Number(sum)+Number(res)
}).then(function(){
    cy.log(sum)
})
cy.get('h3 strong').then(function(element){
    var amount= element.text()
    var res = amount.split(" ")
    var total = res[1].trim()
    expect(Number(total)).to.equal(Number(sum))
    
})

})        
})