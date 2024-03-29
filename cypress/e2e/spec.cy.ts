describe('Test default search', () => {
  it('passes', () => {
    cy.visit('localhost:3000')
    cy.url().should('include', '/search')
    cy.get('.search-bar__input').type('avatar')
    cy.contains('SEARCH').click()
    cy.url().should('include', '/avatar')
    cy.contains('Avatar').click()
    cy.url().should('include', 'movie=19995')
    cy.get('.header__body__data__title').should('exist')
    cy.get('.header__body__data__genre').should('exist')
    cy.get('.header__body__data__description').should('exist')
    cy.get('.fa-magnifying-glass').click()
    cy.url().should('include', '/search')
    cy.url().should('not.include', 'movie=19995')
  })
})