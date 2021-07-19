describe("when user visits page", () => {
    it("shows header", () => {
        cy.visit('/')
        cy.get('#header').should('contain', 'Yet Another ToDo List')
    })
})