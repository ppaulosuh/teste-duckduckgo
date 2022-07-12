/// <reference types="cypress" />

context('Funcionalidade pesquisa', () => {
beforeEach(() => {
    cy.visit('https://duckduckgo.com/')
});
    it('Deve fazer a busca por bitcoin utilzando enter', () => {
        
        cy.get('input[type="text"]')
        .should('be.visible')
        .type('Ultimas noticias bitcoin{enter}')
        cy.get('[data-testid="result"]')
        .should('have.length', 10)
    });

    it('Deve fazer busca clicando na lupa', () => {
        cy.get('input[type="text"]')
        .should('be.visible')
        .type('Ultimas noticias bitcoin')
        cy.get('#search_button_homepage').click()
        cy.get('[data-testid="result"]')
        .should('have.length', 10)
    });

    it.only('Deve fazer psquisa utilizando o formulário', () => {
        cy.get('input[type="text"]')
        .should('be.visible')
        .type('Ultimas noticias bitcoin')
        cy.get('form').submit()
        cy.get('[data-testid="result"]')
        .should('have.length', 10)
    });
})