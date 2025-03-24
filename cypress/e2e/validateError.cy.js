

describe('Testing the validation error', () => {
    it('Validate the error message', () => {
    cy.visit('/src/index.html');
    cy.wait(5000)
   cy.get("#firstName").type('MARCIO');
    cy.get("#lastName").type('DE JESUS');
    cy.get("#email").type('MARCIODEJESUS@EMAIL.COM.BR');
    cy.get("#phone") // Ensure the input accepts numbers as a string

    cy.get('.button').click();
    cy.get('.button').should('be.visible');
});
})

