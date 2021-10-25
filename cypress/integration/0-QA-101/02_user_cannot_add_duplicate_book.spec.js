import data from './_bookData';
// DOESN'T ACTUALLY WORK BECAUSE I HAVEN'T WRITTEN THE
// FRONT END / BACK END ERROR HANDLING DUE TO TIME
// CONSTRAINTS

describe('A user cannot add a duplicate book', () => {
  it('visit the book page', () => {
    // 1. Navigate to the /add page
    cy.visit('http://localhost:1234/add');
    cy.get('h1').should('contain', 'Add Book');
  });

  it('Creates a book', () => {
    // 2. Create a book
    Object.entries(data.input).forEach((e) => {
      const [key, value] = e;
      cy.get(`input[name="${key}"]`).type(value).should('have.value', value);
    });
    cy.get('.edit_form__btn--submit')
      .should('contain', 'Submit')
      .should('be.visible')
      .click();
  });

  it('Tries to create a book with the same title and author', () => {
    // 2. Create a duplicate book
    cy.visit('http://localhost:1234/add');
    Object.entries(data.input).forEach((e) => {
      const [key, value] = e;
      cy.get(`input[name="${key}"]`).type(value).should('have.value', value);
    });
    cy.get('.edit_form__btn--submit')
      .should('contain', 'Submit')
      .should('be.visible')
      .click();
  });

  it('Submits a duplicate book and gets an error', () => {
    // 4. Submit and verify error
    cy.get('.edit_form__btn--submit')
      .should('contain', 'Submit')
      .should('be.visible')
      .click();
    cy.url().should('include', '/add');
    cy.contains('Error');
    cy.contains('already exists').should('be.visible');
  });
});
