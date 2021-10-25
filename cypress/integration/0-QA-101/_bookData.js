// eslint-disable-next-line import/no-extraneous-dependencies
import faker from 'faker';
// const faker = require('faker');

let today = new Date();
today = today.toISOString().substring(0, 10);

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

const data = {
  input: {
    title: toTitleCase(faker.random.words(3)),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    published_date: faker.date
      .between('1900-01-01', today)
      .toISOString()
      .substring(0, 10),
    pages: faker.datatype.number({ min: 100, max: 700 }),
  },
  textarea: {
    synopsis: faker.random.words(25),
  },
  upload: {
    cover: 'test.jpeg',
  },
  select: {
    rating: faker.datatype.number({ min: 0, max: 4 }),
  },
};

export default data;
