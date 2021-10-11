module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      // title (VARCHAR, NOT NULL, between 1-200 characters)
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      // synopsis (TEXT,  NULL)
      synopsis: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
          len: [0, 2000],
        },
      },
      // date_published (DATEONLY, NULL, length 10 characters)
      date_published: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isDate: true,
        },
      },
      // pages (INT, NULL, unsigned, between 1-2000)
      pages: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        validate: {
          min: 1,
          max: 2000,
        },
      },
      // rating (INT, NULL, unsigned, between 1-5)
      rating: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        validate: {
          min: 1,
          max: 5,
        },
      },
      // cover (VARCHAR, NULL)
      cover: {
        type: DataTypes.TEXT('medium'),
        allowNull: true,
      },
    },

    // settings
    {
      paranoid: true,
      timestamps: true,
    }
  );

  // Author association
  Book.associate = ({ Author }) => {
    Book.belongsTo(Author, {
      onDelete: 'NO ACTION',
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Book;
};
