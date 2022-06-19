import { account, data } from "./dataset"

Given("I'm login as verified account", ()=> {
    cy.visit("/")
        .get('#navbarSupportedContent > div > a:nth-child(1)')
        .click()
    cy.get('[name="email"]').type(account.email)
    cy.get('[name="password"]').type(account.password)
    cy.get('#auth-left > form > button').click()

    cy.on('uncaught:exception', (err, runnable) =>{
        return false
    })
})

And("I'm on the warehouse dashboard page", ()=>{
    cy.url().should('contain', 'dashboard')
})

And('I click the "Pembayaran" menu', ()=>{
    cy.get("#sidebar > div > div.sidebar-menu > ul > li:nth-child(4) > a > span")
        .click()
})

When('I click the "Upload bukti pembayaran" button', ()=>{
    cy.get("#table_pembayaran > tbody > tr.odd > td.text-center > a")
        .click()
}) 



Then("I input the payment the correct format", () => {
    cy.get('[name="bukti_pembayaran"]')
    .attachFile("evidence.pdf")
})


And('I click the "Buat pembayaran" button', ()=>{
    cy.get("#main-content > div > div.row.g-5 > div.col-md-7.col-lg-8 > form > div > button")
        .click()
})

And('I click the "Buat pembayaran" button', () => {
    cy.get('#main-content > div > div.row.g-5 > div.col-md-7.col-lg-8 > form > div > button')
        .click()
})

And('I see the inputted item on the table on "Pembayaran" Page', () => {

})

