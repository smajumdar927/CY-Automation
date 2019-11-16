/// <reference types="Cypress" />
describe('Section 09 and Lec-41', ()=>{
 
    before(function(){
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
    })
it('first data driven test with fixture', function() {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get('form div input[name="name"]').type(this.data.name)
    cy.get('select').select(this.data.gender)

})
    
})