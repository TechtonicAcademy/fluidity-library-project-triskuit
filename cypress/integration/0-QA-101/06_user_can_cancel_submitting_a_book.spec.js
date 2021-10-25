import data from './_bookData';

describe('User can add a book', () => {
  it('Visits the book page', () => {
    // 1. Navigate to the /add page
    cy.visit('http://localhost:1234/add');
    cy.get('.edit_form__h1').should('contain', 'Add Book').should('be.visible');
  });

  it('Enters book data', () => {
    // 2. Enter test data into corresponding fields
    Object.entries(data.input).forEach((e) => {
      const [key, value] = e;
      cy.get(`input[name="${key}"]`)
        .clear()
        .type(value)
        .should('have.value', value);
    });

    cy.get(`textarea[name="synopsis"]`)
      .type(data.textarea.synopsis)
      .should('have.value', data.textarea.synopsis);

    cy.get('.edit_form__stars>span')
      .eq(data.select.rating)
      .click()
      .should('have.css', 'color')
      .and('eq', 'rgb(0, 0, 0)');
  });

  it('Submits the form', () => {
    // 3. Click cancel and confirm redirect and no new book creation
    cy.get('.edit_form__btn').contains('Cancel').should('be.visible').click();
    cy.url().should('include', '/bookshelf');
    cy.should('not.contain', data.input.title);
  });
});
