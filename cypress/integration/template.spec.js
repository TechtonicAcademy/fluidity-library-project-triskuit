/* eslint-disable no-undef */
// first_try.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('My First Test', () => {
  it('Visits the landing page', () => {
    cy.visit('http://localhost:1234/');
    cy.contains('See Books').click();
    cy.url().should('include', '/bookshelf');
    cy.contains('add book').click();
  });
  it('enters test data', () => {
    cy.get('input[name="title"]')
      .type('A new book')
      .should('have.value', 'A new book');
    cy.get('input[name="author"]')
      .type('A new author')
      .should('have.value', 'A new author');
  });
});
