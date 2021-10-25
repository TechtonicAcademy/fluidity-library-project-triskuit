import data from './_bookData';

describe('User can add a book', () => {
  it('Visits the book page', () => {
    // 1. Navigate to the /add page
    cy.visit('http://localhost:1234/');
    cy.get('.hero__description')
      .should('contain', 'Read em & weep')
      .should('be.visible');
    cy.get('.nav__links').contains('add book').should('be.visible').click();
    cy.url().should('include', '/add');
    cy.get('.edit_form__h1').should('contain', 'Add Book');
  });

  it('Enters books data', () => {
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

  it('Uploads a cover image', () => {
    // 3. Upload cover image
    // TODO: implement when image upload works
  });

  it('Submits the form', () => {
    // 4. Click submit
    cy.get('.edit_form__btn--submit')
      .should('contain', 'Submit')
      .should('be.visible')
      .click();
    cy.url().should('include', '/bookshelf');
    cy.contains(data.input.title).should('be.visible');
    cy.contains(data.input.firstName + ' ' + data.input.lastName).should(
      'be.visible'
    );
  });
});
