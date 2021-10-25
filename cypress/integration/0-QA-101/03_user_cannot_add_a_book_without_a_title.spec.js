import data from './_bookData';

delete data.input.title;

describe('User cannot add a book without a title', () => {
  it('Visits the Add Book page', () => {
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

  it('Submits the book and receives an error', () => {
    // 3. Confirm that the page did not redirect and an error was triggered
    cy.get('.edit_form__btn--submit')
      .should('contain', 'Submit')
      .should('be.visible')
      .click();

    cy.url().should('include', '/add');

    cy.get('input[name="title"]')
      .then(($el) => $el[0].checkValidity())
      .should('be.false');

    cy.get('input[name="title"]')
      .invoke('prop', 'validationMessage')
      .should('eq', 'Please fill out this field.');
  });

  it('Submits again and recieves the same error', () => {
    // 4. repeat to confirm that the error persists until the user adds a title
    cy.get('.edit_form__btn--submit')
      .should('contain', 'Submit')
      .should('be.visible')
      .click();

    cy.url().should('include', '/add');

    cy.get('input[name="title"]')
      .invoke('prop', 'validationMessage')
      .should('eq', 'Please fill out this field.');
  });
});
