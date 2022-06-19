Given("I'm on the warehouse landing page", ()=> {
    cy.visit("/")
})

When("I click the login button on the top of navbar", ()=>{
    cy.get('#navbarSupportedContent > div > a:nth-child(1)')
    .click()

    cy.on('uncaught:exception', (err, runnable) =>{
        return false
    })
})

And("I redirected to the login page", ()=>{
    cy.url().should('contain', 'login')
})

Then("I fill out the login form with my valid {string} and {string}", (email, password) =>{
    cy.get('[name="email"]').type(email)
    cy.get('[name="password"]').type(password)
     
})

Then("I fill out the login form without fill out the {string} or {string} fields", (email, password) =>{
    cy.get('[name="email"]')
        .clear()
        .then(() => {
            if (email) cy.get('[name="email"]').type(email, {force: true})});

    cy.get('[name="password"]')
    .clear()
    .then(() => {
        if (password) cy.get('[name="password"]').type(password, {force: true})});
     
})


Then("I fill out the login form with the no existing {string} and {string}", (email, password) =>{
    cy.get('[name="email"]').type(email)
    cy.get('[name="password"]').type(password)
     
})

And("I click the login button", ()=>{
    cy.get("#auth-left > form > button").click()
})


And("I redirected to the dashboard page", ()=>{
    cy.url().should('contain', 'dashboard')
})

And("I see the required input error {string}", (message)=>{
    cy.get('[class="alert alert-danger"]')
        .contains(message)
})


And("I see the credentials error {string}", (message)=>{
    cy.get('[class="alert alert-danger"]')
        .contains(message)
})
