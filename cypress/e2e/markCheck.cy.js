
describe ('Tick all checkBox',()=>{
it('Tick all checkBox',()=>{
    cy.visit('/index')

    cy.get('#tecnologia ').click
    cy.get('#tecnologia2').click
    cy.get('#tecnologia3').click
    cy.get('#tecnologia4').click
})
})
