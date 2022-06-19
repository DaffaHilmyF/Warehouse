Given("I'm login as verified account", (datatable)=> {
    datatable.hashes().forEach(item => {
        cy.visit("/")
        .get('#navbarSupportedContent > div > a:nth-child(1)')
        .click()

        cy.get('[name="email"]').type(item.email)
        cy.get('[name="password"]').type(item.password)
        cy.get('#auth-left > form > button').click()

        cy.on('uncaught:exception', (err, runnable) =>{
            return false
        })
    })

})

And("I'm on the warehouse dashboard page", ()=>{
    cy.url().should('contain', 'dashboard')
})

And('I click the "ticketing" menu', ()=>{
    cy.get("#sidebar > div > div.sidebar-menu > ul > li:nth-child(6) > a")
    .click()
})

And('I click the "ticketing" on admin menu', ()=>{
    cy.get("#sidebar > div > div.sidebar-menu > ul > li:nth-child(9) > a")
    .click()
})


When('I click the "tambahkan ticket baru" button', () => {
    cy.url().should('contain', 'ticketing')
    cy.get('#main-content > div > section > div > div > div.col-3.align-item-center > a')
        .click()
})

Then('I input the valid {string}', (message) => {
    cy.url().should('contain', 'ticketing/new')
    cy.get('[name="pesan"]')
        .type(message)

})

Then('I input the invalid {string}', (message) => {
    cy.url().should('contain', 'ticketing/new')
    cy.get('[name="pesan"]')
        .clear()
        .then(()=>{
            if(message) cy.get('[name="pesan"]').type(message, {force: true})
        })

})

And('I click the "Tambahkan" button', ()=>{
    cy.get("#main-content > div > section > div > div > div > form > button")
        .click()

})


And('I see the require error {string}', (message)=>{
    cy.get('[name="pesan"]').then(($input) => {
        expect($input[0].validationMessage).to.eq(message)
    })
})

When('I click the "status action" button', ()=>{
    cy.get("#prosesTicket").click()
})

Then("I changes the status", ()=>{
    cy.get("body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-content > select")
        .select("Finish")
    cy.get("body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled")
        .click()
    cy.get("#swal2-title").should("contain","Berhasil")
})

And("I logout", ()=>{
    cy.get("#navbarSupportedContent > div > a > div > div.user-img.d-flex.align-items-center > div > img")
    .click()
    .get("#navbarSupportedContent > div > ul > li:nth-child(4) > a")
    .click()
})