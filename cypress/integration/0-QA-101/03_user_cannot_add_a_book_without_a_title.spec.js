import data from './_bookData';

delete data.input.title;

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

    // 3. Click submit
    cy.contains('Submit').click();

    // 4. Confirm that the page did not redirect and an error was triggered
    cy.url().should('include', '/add');

    cy.get('input[name="title"]')
      .then(($el) => $el[0].checkValidity())
      .should('be.false');

    cy.get('input[name="title"]')
      .invoke('prop', 'validationMessage')
      .should('eq', 'Please fill out this field.');

    // 5. repeat to confirm that the error persists until the user adds a title
    cy.contains('Submit').click();
    cy.url().should('include', '/add');
    cy.get('input[name="title"]')
      .invoke('prop', 'validationMessage')
      .should('eq', 'Please fill out this field.');
  });
});
