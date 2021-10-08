'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const date = new Date();
    await queryInterface.bulkInsert(
      'Authors',
      [
        {
          first_name: 'Matthew',
          last_name: 'Syed',
          createdAt: date,
          updatedAt: date,
        },
        {
          first_name: 'Alain',
          last_name: 'de Botton',
          createdAt: date,
          updatedAt: date,
        },
        {
          first_name: 'Robert',
          last_name: 'Wright',
          createdAt: date,
          updatedAt: date,
        },
        {
          first_name: 'Ted',
          last_name: 'Chiang',
          createdAt: date,
          updatedAt: date,
        },
      ],
      {},
    );

    let authors = await queryInterface.sequelize.query(
      `SELECT id from Authors;`
    );
    authors= authors[0];

    await queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'Black Box Thinking',
          synopsis:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, iure! Itaque nesciunt harum obcaecati reprehenderit similique ipsa in accusamus vero.',
          date_published: '2015-09-08',
          pages: 336,
          rating: 4,
          cover:'',
          createdAt: date,
          updatedAt: date,
          AuthorId: authors[0].id,
        },
        {
          title: 'Status Anxiety',
          synopsis:
            'Praesent nec auctor nisl. Proin placerat velit augue, et facilisis sem pretium in. Sed dignissim odio semper risus lobortis iaculis.',
          date_published: '2004-01-01',
          pages: 320,
          rating: 3,
          cover:'',
          createdAt: date,
          updatedAt: date,
          AuthorId: authors[1].id,
        },
        {
          title: 'Why Buddhism Is True',
          synopsis:
            'Etiam venenatis nisl ante. Nulla tempor ultrices velit. Curabitur a malesuada sapien. Praesent auctor lorem non facilisis tristique. Mauris viverra.',
          date_published: '2017-08-08',
          pages: 336,
          rating: 5,
          cover:'',
          createdAt: date,
          updatedAt: date,
          AuthorId: authors[2].id,
        },
        {
          title: 'Exhalation',
          synopsis:
            'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam egestas in dui vitae finibus. Nunc.',
          date_published: '2019-05-07',
          pages: 368,
          rating: 2,
          cover:'',
          createdAt: date,
          updatedAt: date,
          AuthorId: authors[3].id,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
    await queryInterface.bulkDelete('Authors', null, {});
  },
};
