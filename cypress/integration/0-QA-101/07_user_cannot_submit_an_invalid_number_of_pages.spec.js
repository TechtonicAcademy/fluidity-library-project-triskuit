import data from './_bookData';

data.input.pages = -10;

describe('User cannot submit an invalid number of pages', () => {
  it('visit the book page', () => {
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
  });

  it('Revieves an error upon book submission', () => {
    // 3. Confirm that the page did not redirect and an error was triggered
    cy.get('.edit_form__btn--submit')
      .should('contain', 'Submit')
      .should('be.visible')
      .click();

    cy.url().should('include', '/add');

    cy.get('input[name="pages"]')
      .then(($el) => $el[0].checkValidity())
      .should('be.false');

    cy.get('input[name="pages"]')
      .invoke('prop', 'validationMessage')
      .should('eq', 'Value must be greater than or equal to 0.');
  });
});
