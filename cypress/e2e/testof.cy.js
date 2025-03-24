

       describe("Verify head of page", () => {
       it('Verify head of page', () => {
           cy.visit('../../formulario.html')
           cy.get('#titulo').should('be.visible','Cadastro de DEVs').and('have.text','Cadastro de DEVs');

           cy.get('#subtitulo').should('be.visible','Complete suas informações').and('have.text','Complete suas informações');
           cy.get('#fundo-branco').prev().screenshot();
                });
           });

