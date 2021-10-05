import data from './_bookData';

describe('User can add a book', () => {
  it('visit the book page', () => {
    // 1. Navigate to the /add page
    cy.visit('http://localhost:1234/add');

    // 2. Enter test data into corresponding fields
    Object.entries(data.input).forEach((e) => {
      const [key, value] = e;
      cy.get(`input[name="${key}"]`).type(value).should('have.value', value);
    });
    cy.get(`textarea[name="synopsis"]`).type(data.textarea.synopsis);
    cy.get('.edit_form__stars>span').eq(data.select.rating).click();

    // 3. Click cancel and confirm redirect and no new book creation
    cy.contains('Cancel').click();
    cy.url().should('include', '/bookshelf');

    cy.should('not.contain', data.input.title);
  });
});
