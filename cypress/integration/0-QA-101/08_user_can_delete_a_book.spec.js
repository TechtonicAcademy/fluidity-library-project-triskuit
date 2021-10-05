import data from './_bookData';

describe('User can add a book', () => {
  it('visit the book page', () => {
    // 1. Navigate to the /add page
    cy.visit('http://localhost:1234/add');

    // 2. Enter test data into corresponding fields and
    // click submit to create a book
    Object.entries(data.input).forEach((e) => {
      const [key, value] = e;
      cy.get(`input[name="${key}"]`).type(value).should('have.value', value);
    });
    cy.get(`textarea[name="synopsis"]`).type(data.textarea.synopsis);
    cy.get('.edit_form__stars>span').eq(data.select.rating).click();
    cy.contains('Submit').click();

    // 3. Click the created book to navigate to the book details page
    cy.url().should('include', 'bookshelf');
    cy.contains(data.input.title).click();
    cy.url().should('include', '/book/');

    // 4. Click delete, confirm redirect and book absence
    cy.contains('Delete').click();
    cy.url().should('contain', 'bookshelf');
    cy.contains(data.input.title).should('not.exist');
  });
});
