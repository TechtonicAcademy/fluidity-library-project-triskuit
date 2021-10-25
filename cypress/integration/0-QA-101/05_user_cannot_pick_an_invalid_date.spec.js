import data from './_bookData';

data.input.published_date = '2500-01-01';

describe('User cannot submit an invalid date', () => {
  it('Visits the book page', () => {
    // 1. Navigate to the /add page
    cy.visit('http://localhost:1234/');
    cy.get('.hero__description')
      .should('contain', 'Read em & weep')
      .should('be.visible');
    cy.get('.nav__links').contains('add book').should('be.visible').click();
    cy.url().should('include', '/add');
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

  // 3. Click submit
  it('Submits the form and gets an error', () => {
    // 4. Confirm that the page did not redirect and an error was triggered
    cy.get('.edit_form__btn--submit')
      .should('contain', 'Submit')
      .should('be.visible')
      .click();
    cy.url().should('include', '/add');
    cy.get('input[name="published_date"]')
      .then(($el) => $el[0].checkValidity())
      .should('be.false');
  });
});
