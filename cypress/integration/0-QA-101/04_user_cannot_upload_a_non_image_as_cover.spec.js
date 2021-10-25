// import data from './_bookData';
// TODO: implement once image uploads are functional
// TODO: still not done due to time constraints

describe('User cannot upload a non image as a cover', () => {
  it('visit the book page', () => {
    // 1. Navigate to the /add page
    cy.visit('http://localhost:1234/add');
    // 2. Attempt to upload an image

    // 3. Confirm error message

    // 4. Confirm image is not uploaded to DB or other resources
  });
});
