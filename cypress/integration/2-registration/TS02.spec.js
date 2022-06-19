Given("I'm on the warehouse landing page", ()=> {
    cy.visit("/")
})

When("I click the register button on the top of the navbar", ()=>{
    cy.get('#navbarSupportedContent > div > a:nth-child(2)')
    .click()

    cy.on('uncaught:exception', (err, runnable) =>{
        return false
    })
})

And("I redirected to the register page", ()=>{
    cy.url().should('contain', 'register')
})


Then("I fill out the registration form with following valid data test:", (datatable) =>{
    datatable.hashes().forEach(item => {
        cy.get('[name="nama"]').type(item.name)
        cy.get('[name="email"]').type(item.email)
        cy.get('[name="password"]').type(item.password)
        cy.get('[name="password_confirmation"]').type(item.password)
        cy.get('[name="alamat"]').type(item.address)
        cy.get('[name="tgl_lahir"]').type(item.birthdate)
        cy.get('body').click(0,0)
        if(item.gender == "man"){
            cy.get('[id="radio_pria"]').click()
        }else{
            cy.get('[id="radio_wanita"]').click()
        }
       
    });
})

Then('I fill out the registration form without filling following {string}, {string}, {string}, {string}, {string}, or {string} field', 
    (name, email, password, address, birthdate, gender)=>{
        cy.get('[name="nama"]')
            .clear()
            .then(() => {
                if (name) cy.get('[name="nama"]').type(name, {force: true})});

        cy.get('[name="email"]')
            .clear()
            .then(() => {
                if (email) cy.get('[name="email"]').type(email, {force: true})});

        cy.get('[name="password"]')
            .clear()
            .then(() => {
                if (password) cy.get('[name="password"]').type(password, {force: true})});

        cy.get('[name="password_confirmation"]')
            .clear()
            .then(() => {
                if (password) cy.get('[name="password_confirmation"]').type(password, {force: true})});

        cy.get('[name="alamat"]')
            .clear()
            .then(() => {
                if (address) cy.get('[name="alamat"]').type(address, {force: true})});

        cy.get('[name="tgl_lahir"]').type(birthdate);
        
        cy.get('body').click(0,0)

        if(gender == "man"){
            cy.get('[id="radio_pria"]').click()
        }else if (gender == "woman"){
            cy.get('[id="radio_wanita"]').click()
        }else{
            cy.get('body').click(0,0)
        } 
})

Then("I fill out the registration form without filling following {string}, {string}, {string}, {string}, {string} without gender field", 
    (name, email, password, address, birthdate) =>{

        cy.get('[name="nama"]').type(name)
        cy.get('[name="email"]').type(email)
        cy.get('[name="password"]').type(password)
        cy.get('[name="password_confirmation"]').type(password)
        cy.get('[name="alamat"]').type(address)
        cy.get('[name="tgl_lahir"]').type(birthdate)
        cy.get('body').click(0,0)
})

Then("I fill out the registration form without filling following {string}, {string}, {string}, {string}, {string} without birthdate field", 
    (name, email, password, address, gender) =>{

        cy.get('[name="nama"]').type(name)
        cy.get('[name="email"]').type(email)
        cy.get('[name="password"]').type(password)
        cy.get('[name="password_confirmation"]').type(password)
        cy.get('[name="alamat"]').type(address)
        cy.get('body').click(0,0)
        if(gender == "man"){
            cy.get('[id="radio_pria"]').click()
        }else if (gender == "woman"){
            cy.get('[id="radio_wanita"]').click()
        }else{
            cy.get('body').click(0,0)
        } 
})

And("I click the register button", ()=>{
    cy.get('#auth-left > form > button').click()
})


And("I redirected to the dashboard page", ()=>{
    cy.url().should('contain', 'dashboard')
})

And("I see the required input {string} error {string}", (field, message)=>{
 
    cy.get(`[name="${field}"]`).then(($input) => {
        expect($input[0].validationMessage).to.eq(message)
    })

})

And("I see the required {string} error {string}", (field, message)=>{
 
    cy.get('[id="radio_pria"]').then(($input) => {
        expect($input[0].validationMessage).to.eq(message)
    })

})