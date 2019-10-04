describe('My 3rd test suit', ()=>{
    it('Check the check boxes', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

    })
    it('select static drop down', () => {
        //for static dropdown the tag name should be 'select'
        cy.get('select').select('option1').should('have.value', 'option1')
    })

    it('select dynamic drop down', () => {
        cy.get('#autocomplete').type('Bangladesh')
        //form input.search-keyword
        cy.get('.ui-menu-item div').each((country)=>{
            if (country.text()=== 'Bangladesh') {
                country.click()
            }
        })
        //Validation through assertion
        cy.get('#autocomplete').should('have.value', 'Bangladesh')
    })

    it('Capture visible/invisible text', () => {
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

    it('It should check Radio button', () => {
        cy.get('[value="radio2"]').check().should('be.checked')
    });

})













