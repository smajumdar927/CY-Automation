class HomePage{

    name()
    {
        return cy.get('form div input[name="name"]')
    }
    selectGender(){
        return cy.get('select')
    }

    clickShop(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

export default HomePage