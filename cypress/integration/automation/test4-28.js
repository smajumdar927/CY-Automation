describe('My 3rd test suit', ()=>{
    it('Check the check boxes', () => {
        cy.visit('http://www.qaclickacademy.com/practice.php')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
          //on is used for window alert
        cy.on('window:alert',(alertText)=>{
            //Mocha
            expect(alertText).to.equal('Hello , share this practice page and share your knowledge')
          })

        cy.on('window:confirm', (alertText)=>{
            //mocha 
          expect(alertText).to.equal('Hello , Are you sure you want to confirm?')
        })  

        
    })

})













