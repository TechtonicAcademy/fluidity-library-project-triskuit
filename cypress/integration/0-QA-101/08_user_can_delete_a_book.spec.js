import data from './_bookData';

describe('User can delete a book', () => {
  it('Visits the add book page', () => {
    // 1. Navigate to the /add page
    cy.visit('http://localhost:1234/add');
    cy.get('.edit_form__h1').should('contain', 'Add Book').should('be.visible');
  });

  it('Enters book data', () => {
    // 2. Enter test data into corresponding fields and
    // click submit to create a book
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

    cy.get('.edit_form__btn--submit')
      .should('contain', 'Submit')
      .should('be.visible')
      .click();
    cy.url().should('include', 'bookshelf');
  });

  it('Navigates to the new book details page', () => {
    // 3. Click the created book to navigate to the book details page
    cy.contains(data.input.title).should('be.visible').click();
    cy.url().should('include', '/book/');
  });

  it('Deletes the book', () => {
    // 4. Click delete, confirm redirect and book absence
    cy.get('.main__link--delete')
      .should('contain', 'Delete')
      .should('be.visible')
      .click();
    cy.url().should('contain', 'bookshelf');
    cy.contains(data.input.title).should('not.exist');
  });
});
