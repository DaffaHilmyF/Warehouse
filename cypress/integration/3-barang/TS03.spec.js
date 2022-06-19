Given("I'm login as verified account:", (datatable)=> {
    datatable.hashes().forEach(element => {
        cy.visit("/")
        .get('#navbarSupportedContent > div > a:nth-child(1)')
        .click()
        cy.get('[name="email"]').type(element.email)
        cy.get('[name="password"]').type(element.password)
        cy.get('#auth-left > form > button').click()

        cy.on('uncaught:exception', (err, runnable) =>{
            return false
        })
    })
    
})

And("I'm on the warehouse dashboard page", ()=>{
    cy.url().should('contain', 'dashboard')
})

And('I click the "Barang" menu on the sidebar', ()=>{
    cy.get("#sidebar > div > div.sidebar-menu > ul > li:nth-child(3) > a")
        .click()
})

When('I click the "Tambah Barang Baru" button', ()=>{
    cy.get("#main-content > div > section > div > div > div.col-3.align-item-center > a")
        .click()
}) 

Then("I fill the input Barang form with valid data:", (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('[name="nama_brg"]').type(element.item)
        cy.get('[name="kode_kategori"]')
            .select(element.category)
        cy.get('[name="jumlah_brg"]')
            .clear()
            .type(element.quantity)
        cy.get('[name="kode_gudang"]')
            .select(element.warehouse)
        cy.get('[name="kode_ruangan"]')
            .select(element.room)
            
        cy.get('#ddlSelectKendaraan')
            .select(element.vehicle_code)
    });

})

Then("I fill the input Barang form with invalid data", () => {
    cy.get('[name="nama_brg"]').type(data.invalid.name)
    cy.get('[name="kode_kategori"]')
        .select(data.invalid.category)
    cy.get('[name="jumlah_brg"]')
        .type(data.invalid.quantity)
    cy.get('[name="kode_gudang"]')
        .select(data.invalid.warehouse)
    cy.get('[name="kode_ruangan"]')
        .select(data.invalid.room)
        
    cy.get('#ddlSelectKendaraan')
        .select(data.invalid.transportation_code)
})

Then("I fill the input Barang form with blank data", () => {
    cy.get('body').click(0,0)
})

And('I click the "Selanjutnya" button', ()=>{
    cy.get("#main-content > div > section > div > div > div > form > button")
        .click()
})

And('I click the "Buat pembayaran" button', () => {
    cy.get('#main-content > div > div.row.g-5 > div.col-md-7.col-lg-8 > form > div > button')
        .click()
})

And('I see the overall payment in the table', () => {
    cy.get('#table_pembayaran_length > label').contains('Show')
})

And('I see the invalid datatype error message', ()=>{
    cy.get('[name="jumlah_brg"]').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please input number for this field.')
    })
})

And('I see the required fields error message', ()=>{
    cy.get('[name="nama_brg"]').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill out this field.')
    })
})