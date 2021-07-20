describe("when user visits page", () => {
    it("shows header", () => {
        cy.visit('/')
        cy.get('#header').should('have.text', 'Yet Another ToDo List')
    })
    it("shows user input", () => {
        cy.visit('/')
        cy.get('#input').type('Take bins out')
        cy.get('#submit').click()
        cy.get('#list').should('contain', 'Take bins out')
    })
    it("clears list", () => {
        cy.visit('/')
        cy.get('#input').type('Take bins out')
        cy.get('#submit').click()
        cy.get('#clear').click()
        cy.get('#list').should('be.empty')
    })

})