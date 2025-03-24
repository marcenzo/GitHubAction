

describe('Login', () => {
    it('com sucesso', () => {
      cy.visit('https://practicetestautomation.com/practice-test-login/');
      cy.wait(5000)
      cy.get('#username').type(Cypress.env('user_name')), { log: false }
      cy.get("#password").type(Cypress.env('user_password'), { log: false })
      cy.get('#submit').click();


      cy.get(".post-title").should('have.text', 'Logged In Successfully');
      cy.log('Sing_in with success');

    })
  })

