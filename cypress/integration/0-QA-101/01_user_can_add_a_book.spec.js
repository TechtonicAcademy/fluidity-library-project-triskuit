const data = {
  input: {
    title: 'New Book',
    author: 'New Author',
    published_date: '2001-01-01',
    pages: 200,
  },
  textarea: {
    synopsis: 'New Synopsis',
  },
  upload: {
    cover: 'test.jpeg',
  },
  select: {
    rating: 3,
  },
};

describe('User can add a book', () => {
  it('visit the book page', () => {
    // 1. Navigate to the /add page
    cy.visit('http://localhost:1234/');
    cy.contains('add book').click();
    cy.url().should('include', '/add');
    cy.contains('Add Book');
    // 2. Enter test data into corresponding fields
    Object.entries(data.input).forEach((e) => {
      const [key, value] = e;
      cy.get(`input[name="${key}"]`).type(value).should('have.value', value);
    });
    cy.get(`textarea[name="synopsis"]`)
      .type(data.textarea.synopsis)
      .should('have.value', data.textarea.synopsis);
    cy.get('.edit_form__stars>span')
      .eq(data.select.rating)
      .click()
      .should(
        'have.attr',
        'style',
        'color: black; width: 20px; height: 20px; cursor: pointer; display: inline-flex;'
      );
    // 3. Upload cover image
    // TODO: implement when image upload works

    // 4. Click submit
    cy.contains('Submit').click();
    cy.url().should('include', 'bookshelf');
    cy.contains(data.input.title);
    cy.contains(data.input.author);
  });
});
