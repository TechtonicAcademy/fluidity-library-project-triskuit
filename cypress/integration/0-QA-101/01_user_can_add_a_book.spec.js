describe('User can add a book', () => {
  it('visit the book page', () => {
    cy.visit('http://localhost:1234/');
    cy.contains('add book').click();
    cy.url().should('include', '/add');
    cy.contains('Add Book');
    cy.get('input[name="title"]')
      .type('A new book')
      .should('have.value', 'A new book');
  });
});
